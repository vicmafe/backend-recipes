const connection = require('./connection');

const getAllUsers = async () =>
  connection()
    .then((db) => db.collection('users').find().toArray());

const createUser = async (user) => {
  const { name, email, role, password } = user;
  connection()
    .then((db) => db.collection('users')
      .insertOne(({
        name,
        email,
        role,
        password,
      })));
};

const findByPassword = async (password) => {
  const userPassword = await connection()
    .then((db) => db
      .collection('users')
      .findOne({ password }))
      .catch(() => false);
    console.log('qual usuario da password?', userPassword);
  return userPassword;
};

module.exports = {
  createUser,
  getAllUsers,
  findByPassword,
};
