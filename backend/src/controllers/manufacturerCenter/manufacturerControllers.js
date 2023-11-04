const Manufacturer = require("../../models/manufacturerCenter/manufacturerCenter");

module.exports = manufacturerControllers = async (manufacturerData) => {
  try {
    const manufacturer = new Manufacturer({ ...manufacturerData });
    const response = await manufacturer.save();
    return { responseManufacturerCenter: response };
  } catch (err) {
    console.log("manufacturer Controllers", err.message);
    throw err;
  }
};
