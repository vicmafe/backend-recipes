const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const loginController = require('./controller/loginController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', userController);

app.use('/login', loginController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send('hello');
});

app.use((err, _req, res, _next) => {
  const { status, messageObject } = err;
  return res.status(status).json(messageObject);
});

app.listen(PORT, () => console.log('to na porta:', PORT));
