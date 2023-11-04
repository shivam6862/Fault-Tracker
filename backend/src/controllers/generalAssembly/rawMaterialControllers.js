const RawMaterial = require("../../models/generalAssembly/rawMaterial");

module.exports = rawMaterialControllers = async (rawMaterialData) => {
  try {
    const rawMaterial = new RawMaterial({ ...rawMaterialData });
    const response = await rawMaterial.save();
    return { responsegeneralAssembly: response };
  } catch (err) {
    console.log("rawMaterialControllers", err.message);
    throw err;
  }
};
