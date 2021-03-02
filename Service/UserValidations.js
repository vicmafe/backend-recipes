const { getAllUsers } = require('../models/cookmodel');

const verifyDataExists = (name, email, password) => {
  if (!name || !email || !password) {
    return false;
  }
  return true;
};

const verifyEmailFormat = (email) => {
  const expectedFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/;
  return expectedFormat.test(email);
};

const verifyEmailExist = async (email) => {
  const allUsers = await getAllUsers();
  const searchEmail = allUsers.find((user) => user.email === email);
  if (searchEmail) {
    return true;
  }
  return false;
};

module.exports = {
  verifyDataExists,
  verifyEmailFormat,
  verifyEmailExist,
};
