const Product = require("../../models/generalAssembly/product");

module.exports = productsController = async (searchQuery) => {
  try {
    const trimmedSearchQuery = searchQuery.trim();
    const regex = new RegExp(trimmedSearchQuery, "i");
    const products = await Product.find(
      { productName: { $regex: regex } },
      { productName: 1, productID: 1, supplierID: 1, _id: 0 }
    ).limit(5);
    return products;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
