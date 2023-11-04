const insertSignUpRoute = require("../routes/auth/insertSignUpRoute");
const getSigninRoute = require("../routes/auth/getSigninRoute");
const resetPasswordRoutes = require("../routes/auth/resetPasswordRoutes");
const getNewPasswordRoutes = require("../routes/auth/getNewPasswordRoutes");
const insertnewPasswordRoutes = require("../routes/auth/insertnewPasswordRoutes");
const generalassemblyproductRoutes = require("../routes/generalAssembly/productRoutes");
const rawMaterialRoutes = require("../routes/generalAssembly/rawMaterialRoutes");
const supplierRoutes = require("../routes/generalAssembly/supplierRoutes");
const manufacturerCenterRoutes = require("./manufacturerCenter/insertmanufacturerCenterRoutes");
const insertdistributionCenterRoutes = require("../routes/distributionCenter/insertdistributionCenterRoutes");
const shipmentsRoutes = require("../routes/distributionCenter/shipmentsRoutes");
const customerRoutes = require("../routes/retailStore/customerRoutes");
const orderRoutes = require("../routes/retailStore/orderRoutes");
const retailstoreproductRoutes = require("../routes/retailStore/productRoutes");
const customerClaimRoutes = require("../routes/defects/customerClaimRoutes");
const defectsRoutes = require("../routes/defects/defectsRoutes");

module.exports = routes = [
  insertSignUpRoute,
  getSigninRoute,
  resetPasswordRoutes,
  getNewPasswordRoutes,
  insertnewPasswordRoutes,
  supplierRoutes,
  rawMaterialRoutes,
  generalassemblyproductRoutes,
  manufacturerCenterRoutes,
  insertdistributionCenterRoutes,
  shipmentsRoutes,
  customerRoutes,
  orderRoutes,
  retailstoreproductRoutes,
  customerClaimRoutes,
  defectsRoutes,
];
