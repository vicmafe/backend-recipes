const verifyDataExists = ({ name, email, password }) => {
  if (name || email || password) {
    return true;
  }
  return false;
};

// const verifyEmailFormat = (email) => {
//   const expectedFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/;
//   return expectedFormat.test(email);
// };

module.exports = {
  verifyDataExists,
  // verifyEmailFormat,
};
