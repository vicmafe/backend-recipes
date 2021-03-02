const { Router } = require('express');
const { postUser } = require('../models/cookmodel');
const { lastUserData } = require('../Service/userServices');
const {
  verifyDataExists,
  verifyEmailFormat,
  verifyEmailExist,
} = require('../Service/UserValidations');

const router = Router();
const NOT_FOUND = 400;
const CONFLICT = 409;
const CREATED = 201;

const err = {
  status: 0,
  messageObject: {
    message: '',
  },
};

const userSend = {
  name: '',
  email: '',
  role: 'user',
};

router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!verifyDataExists(name, email, password) || !verifyEmailFormat(email)) {
    err.status = NOT_FOUND;
    err.messageObject.message = 'Invalid entries. Try again.';
    return next(err);
  }
  if (await verifyEmailExist(email)) {
    err.status = CONFLICT;
    err.messageObject.message = 'Email already registered';
    return next(err);
  }
  userSend.name = name;
  userSend.email = email;
  await postUser(userSend);
  const user = await lastUserData();
  const userAdded = { user };
  return res.status(CREATED).send(userAdded);
});

module.exports = router;
