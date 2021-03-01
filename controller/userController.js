const { Router } = require('express');
const { verifyDataExists } = require('../Service/UserValidations');

const router = Router();
const NOT_FOUND = 400;

const err = {
  status: NOT_FOUND,
  message: '',
};

router.post('/', (req, res, next) => {
  const { name, email, password } = req.body;
  const existData = verifyDataExists(name, email, password);
  console.log('existe os dados:', existData);
  if (!existData) {
    err.message = 'Invalid entries. Try again';
    return next(err);
  }
  return res.status(200).send({ message: 'Uhuuu deu bom!' });
});

module.exports = router;
