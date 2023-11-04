const Shipment = require("../../models/distributionCenter/shipment");

module.exports = shipmentsControllers = async (shipmentData) => {
  try {
    const shipment = new Shipment({ ...shipmentData });
    const response = await shipment.save();
    return { responseDistributionCenter: response };
  } catch (err) {
    console.log("shipmentsControllers", err.message);
    throw err;
  }
};
