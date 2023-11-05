const RawMaterial = require("../../models/generalAssembly/rawMaterial");
const Product = require("../../models/generalAssembly/product");

module.exports = getRawMaterialAndProductsController = async (searchQuery) => {
  try {
    const trimmedSearchQuery = searchQuery.trim();
    const regex = new RegExp(trimmedSearchQuery, "i");
    const products = await Product.find(
      { productName: { $regex: regex } },
      { productName: 1, productID: 1, supplierID: 1, _id: 0 }
    ).limit(5);
    const rawMaterials = await RawMaterial.find(
      { materialName: { $regex: regex } },
      { materialName: 1, materialID: 1, supplierID: 1, _id: 0 }
    ).limit(5);
    return { products: products, rawMaterials: rawMaterials };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
