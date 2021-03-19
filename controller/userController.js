const { Router } = require('express');
const { postUser } = require('../service/userServices');
const {
  existSetData,
  verifyEmailFormat,
  verifyEmailAlreadyExist,
} = require('../service/UserValidations');

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
  password: '',
  role: 'user',
  _id: '',
};

router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!existSetData(name, email, password) || !verifyEmailFormat(email)) {
    err.status = NOT_FOUND;
    err.messageObject.message = 'Invalid entries. Try again.';
    return next(err);
  }
  if (await verifyEmailAlreadyExist(email)) {
    err.status = CONFLICT;
    err.messageObject.message = 'Email already registered';
    return next(err);
  }
  userSend.name = name;
  userSend.email = email;
  userSend.password = password;
  const newUser = await postUser(userSend);

  return res.status(CREATED).json({ user: newUser.ops[0] });
});

module.exports = router;
