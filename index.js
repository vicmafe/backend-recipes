const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', userController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send('hello');
});

app.use((err, _req, res, _next) => {
  const { status, message } = err;
  return res.status(status).json(message);
});

app.listen(PORT, () => console.log('to na porta:', PORT));
