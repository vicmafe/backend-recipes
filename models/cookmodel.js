const connection = require('./connection');

const getAllUsers = async () =>
  connection()
    .then((db) => db.collection('Cookmaster').find().toArray());

const postUser = async ({ name, email, role }) =>
  connection()
    .then((db) => db.collection('Cookmaster')
      .insertOne(({
        name,
        email,
        role,
      })));

module.exports = {
  postUser,
  getAllUsers,
};
