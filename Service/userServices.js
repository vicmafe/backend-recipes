const { getAllUsers, findByPassword } = require('../models/cookmodel');

const lastUserData = async () => {
  const allUsers = await getAllUsers();
  const lastUserIndex = allUsers.length - 1;
  return allUsers[lastUserIndex];
};

const rightPassword = async (password) => {
  const userPassword = await findByPassword(password);
  if (!userPassword) {
    return false;
  }
  return true;
};

module.exports = {
  lastUserData,
  rightPassword,
};
