const Supplier = require("../../models/generalAssembly/supplier");

module.exports = supplierControllers = async (supplierData) => {
  try {
    const supplier = new Supplier({ ...supplierData });
    const response = await supplier.save();
    return { responsegeneralAssembly: response };
  } catch (err) {
    console.log("supplierControllers", err.message);
    throw err;
  }
};
