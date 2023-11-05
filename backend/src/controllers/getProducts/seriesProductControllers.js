const Product = require("../../models/generalAssembly/product");

module.exports = getSeriesProduct = async (seriesid) => {
  try {
    const products = await Product.find({ productID: seriesid });
    return products;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
  s;
};
