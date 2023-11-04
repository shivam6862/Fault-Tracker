const insertSignUpRoute = require("../routes/auth/insertSignUpRoute");
const getSigninRoute = require("../routes/auth/getSigninRoute");
const resetPasswordRoutes = require("../routes/auth/resetPasswordRoutes");
const getNewPasswordRoutes = require("../routes/auth/getNewPasswordRoutes");
const insertnewPasswordRoutes = require("../routes/auth/insertnewPasswordRoutes");

module.exports = routes = [
  insertSignUpRoute,
  getSigninRoute,
  resetPasswordRoutes,
  getNewPasswordRoutes,
  insertnewPasswordRoutes,
];
