const shipmentsControllers = require("../../controllers/distributionCenter/shipmentsControllers");

module.exports = shipmentsRoutes = {
  path: "/distributioncenter/shipments",
  method: "post",
  handler: async (req, res) => {
    try {
      const shipmentData = req.body;
      const response = await shipmentsControllers(shipmentData);
      return res.status(200).send({
        message: "Shipment saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Shipment not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
