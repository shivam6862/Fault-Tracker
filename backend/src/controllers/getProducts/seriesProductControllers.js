const Product = require("../../models/generalAssembly/product");

const populateSubproductsAndMaterials = async (productId) => {
  const product = await Product.findOne({ productID: productId })
    .populate({
      path: "materialIDs",
      model: "RawMaterial",
    })
    .populate({
      path: "subProductIDs",
      model: "Product",
      populate: {
        path: "materialIDs",
        model: "RawMaterial",
      },
    })
    .populate({
      path: "supplierID",
      model: "Supplier",
    })
    .exec();
  console.log("Working!");
  if (
    Array.isArray(product.subProductIDs) &&
    product.subProductIDs.length > 0
  ) {
    product.subProductIDs = await Promise.all(
      product.subProductIDs.map(async (subProductId) => {
        return await populateSubproductsAndMaterials(subProductId.productID);
      })
    );
  }

  return product;
};

module.exports = getSeriesProduct = async (seriesid) => {
  try {
    const product = await populateSubproductsAndMaterials(seriesid);
    return product;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
