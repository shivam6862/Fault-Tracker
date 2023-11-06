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
    // const materialIds = product.materialIDs;
    //  const subproductIds = product.subProductIDs;
    const materials = [];
    const subproducts = [];

    // Populate materials
    for (const materialId of product.materialIDs) {
      const material = await getMaterialById(materialId);
      materials.push(material);
    }

    // Populate subproducts
    for (const subproductId of product.subProductIDs) {
      const subproduct = await populateSubproductsAndMaterials(subproductId);
      subproducts.push(subproduct);
    }

    return {
      productName: product.productName,
      materials,
      subproducts,
      supplierID: product.supplierID,
    };
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
