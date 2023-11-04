const insertSignUpRoute = require("../routes/auth/insertSignUpRoute");
const getSigninRoute = require("../routes/auth/getSigninRoute");
const resetPasswordRoutes = require("../routes/auth/resetPasswordRoutes");
const getNewPasswordRoutes = require("../routes/auth/getNewPasswordRoutes");
const insertnewPasswordRoutes = require("../routes/auth/insertnewPasswordRoutes");
const productRoutes = require("../routes/generalAssembly/productRoutes");
const rawMaterialRoutes = require("../routes/generalAssembly/rawMaterialRoutes");
const supplierRoutes = require("../routes/generalAssembly/supplierRoutes");

module.exports = routes = [
  insertSignUpRoute,
  getSigninRoute,
  resetPasswordRoutes,
  getNewPasswordRoutes,
  insertnewPasswordRoutes,
  supplierRoutes,
  rawMaterialRoutes,
  productRoutes,
];
