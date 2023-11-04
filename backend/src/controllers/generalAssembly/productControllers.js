const Product = require("../../models/generalAssembly/product");

module.exports = productControllers = async (productData) => {
  try {
    const product = new Product({ ...productData });
    const response = await product.save();
    return { responsegeneralAssembly: response };
  } catch (err) {
    console.log("productControllers", err.message);
    throw err;
  }
};
