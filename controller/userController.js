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
const CREATED = 201;

const err = {
  status: NOT_FOUND,
  message: '',
};

const user = {
  name: '',
  email: '',
  role: 'user',
};

router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!verifyDataExists(name, email, password) || !verifyEmailFormat(email)) {
    err.message = 'Invalid entries. Try again';
    return next(err);
  }
  if (await verifyEmailExist(email)) {
    err.message = 'Email already registered';
    return next(err);
  }
  user.name = name;
  user.email = email;
  await postUser(user);
  const userAdded = await lastUserData();
  return res.status(CREATED).send(userAdded);
});

module.exports = router;
