const Product = require("../../models/generalAssembly/product");

module.exports = productsController = async (searchQuery) => {
  try {
    return [{}];
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
