const Product = require("../../models/retailStore/product");

module.exports = productControllers = async (productData) => {
  try {
    const product = new Product({ ...productData });
    const response = await product.save();
    return { responseRetailStore: response };
  } catch (err) {
    console.log("productControllers", err.message);
    throw err;
  }
};
