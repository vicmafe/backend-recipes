const connection = require('./connection');

const getAllUsers = async () =>
  connection()
    .then((db) => db.collection('users').find().toArray());

const postUser = async (user) => {
  const { name, email, role } = user;
  connection()
    .then((db) => db.collection('users')
      .insertOne(({
        name,
        email,
        role,
      })));
};

module.exports = {
  postUser,
  getAllUsers,
};
