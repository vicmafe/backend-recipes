const { getAllUsers, findByPassword, createUser } = require('../models/userModel');

const postUser = async (user) => {
  try {
    await createUser(user);
    return true;
  } catch (e) {
    return null;
  }
};

const lastUserData = async () => {
  const allUsers = await getAllUsers();
  const lastUserIndex = allUsers.length - 1;
  return allUsers[lastUserIndex];
};

const rightPassword = async (password) => {
  try {
    return await findByPassword(password);
  } catch (e) {
    return null;
  }
};

module.exports = {
  lastUserData,
  rightPassword,
  postUser,
};
