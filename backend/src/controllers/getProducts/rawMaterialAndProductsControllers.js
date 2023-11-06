const RawMaterial = require("../../models/generalAssembly/rawMaterial");
const Product = require("../../models/generalAssembly/product");
const Supplier = require("../../models/generalAssembly/supplier");

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

    const productPromises = products.map(async (product) => {
      const supplier = await Supplier.findOne({
        supplierIds: product.supplierID,
      });
      if (supplier) product.supplierID = supplier.supplierName;
      return product;
    });

    const rawMaterialPromises = rawMaterials.map(async (rawMaterial) => {
      const supplier = await Supplier.findOne({
        supplierIds: rawMaterial.supplierID,
      });
      if (supplier) rawMaterial.supplierID = supplier.supplierName;
      return rawMaterial;
    });

    const populatedProducts = await Promise.all(productPromises);
    const populatedRawMaterials = await Promise.all(rawMaterialPromises);

    return { products: populatedProducts, rawMaterials: populatedRawMaterials };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
