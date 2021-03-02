const { getAllUsers } = require('../models/cookmodel');

const lastUserData = async () => {
  const allUsers = await getAllUsers();
  const lastUserIndex = allUsers.length - 1;
  return allUsers[lastUserIndex];
};

module.exports = {
  lastUserData,
};
