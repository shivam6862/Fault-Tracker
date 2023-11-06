const Product = require("../../models/generalAssembly/product");
const RawMaterial = require("../../models/generalAssembly/rawMaterial");
const Supplier = require("../../models/generalAssembly/supplier");

var subProductIData = {};

const getMaterialById = async (materialId) => {
  console.log("materialId", materialId);
  try {
    const material = await RawMaterial.findOne({
      materialID: materialId,
    }).exec();
    return material;
  } catch (error) {
    console.error("Error fetching raw material:", error.message);
    throw error;
  }
};

const getSupplierById = async (supplierId) => {
  console.log("supplierId", supplierId);
  try {
    const supplier = await Supplier.findOne({
      supplierIds: supplierId,
    }).exec();
    return supplier;
  } catch (error) {
    console.error("Error fetching supplier:", error.message);
    throw error;
  }
};

const populateSubproductsAndMaterials = async (productId) => {
  try {
    const product = await Product.findOne({ productID: productId }).exec();
    if (!product) {
      return { subProductIDs: [], materialIDs: [], supplierID: null };
    }

    console.log(product);

    const materialIDs = product.materialIDs;
    const supplierID = product.supplierID;
    const subProductIDs = product.subProductIDs;

    for (const subProductID of subProductIDs) {
      const materialData = await Promise.all(materialIDs.map(getMaterialById));
      console.log("materialData", materialData);
      const supplierData = await getSupplierById(supplierID);
      console.log("supplierData", supplierData);
      const subProductInfo = await populateSubproductsAndMaterials(
        subProductID
      );
      console.log("subProductInfo", subProductInfo);
    }
    return { subProductIDs: subProductIData };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = getSeriesProduct = async (seriesid) => {
  try {
    const result = await populateSubproductsAndMaterials(seriesid);
    return result;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
