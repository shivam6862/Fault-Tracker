const RawMaterial = require("../../models/generalAssembly/rawMaterial");
const Product = require("../../models/generalAssembly/product");

module.exports = getRawMaterialAndProductsController = async (searchQuery) => {
  try {
    return [{}];
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
