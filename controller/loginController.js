const { Router } = require('express');
const { verifyEmailFormat } = require('../Service/UserValidations');
const { rightPassword } = require('../Service/userServices');

const router = Router();
const SUCCESS = 200;

const err = {
  status: 401,
  messageObject: {
    message: '',
  },
};

router.post('/', async (req, res, next) => {
  const { email, password } = req.body;
  const emailFormat = verifyEmailFormat(email);
  const userRefPasswor = await rightPassword(password);
  if (!email || !password) {
    err.messageObject.message = 'All fields must be filled';
    return next(err);
  }
  if (!emailFormat || !userRefPasswor) {
    err.messageObject.message = 'Incorrect username or password';
    return next(err);
  }
  return res.status(SUCCESS).json('uhuu rodando liso');
});

module.exports = router;
