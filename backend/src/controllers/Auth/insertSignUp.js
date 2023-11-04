const User = require("../../models/user");

module.exports = insertSignUp = async (userData) => {
  try {
    const user = new User({ ...userData });
    const responseSignUp = await user.save();
    return { responseSignUp: responseSignUp };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
