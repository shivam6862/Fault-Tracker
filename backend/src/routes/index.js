const insertSignUpRoute = require("../routes/auth/insertSignUpRoute");
const getSigninRoute = require("../routes/auth/getSigninRoute");
const resetPasswordRoutes = require("../routes/auth/resetPasswordRoutes");
const getNewPasswordRoutes = require("../routes/auth/getNewPasswordRoutes");
const insertnewPasswordRoutes = require("../routes/auth/insertnewPasswordRoutes");
const productRoutes = require("../routes/generalAssembly/productRoutes");
const rawMaterialRoutes = require("../routes/generalAssembly/rawMaterialRoutes");
const supplierRoutes = require("../routes/generalAssembly/supplierRoutes");
const manufacturerCenterRoutes = require("./manufacturerCenter/insertmanufacturerCenterRoutes");
const insertdistributionCenterRoutes = require("../routes/distributionCenter/insertdistributionCenterRoutes");
const shipmentsRoutes = require("../routes/distributionCenter/shipmentsRoutes");

module.exports = routes = [
  insertSignUpRoute,
  getSigninRoute,
  resetPasswordRoutes,
  getNewPasswordRoutes,
  insertnewPasswordRoutes,
  supplierRoutes,
  rawMaterialRoutes,
  productRoutes,
  manufacturerCenterRoutes,
  insertdistributionCenterRoutes,
  shipmentsRoutes,
];
