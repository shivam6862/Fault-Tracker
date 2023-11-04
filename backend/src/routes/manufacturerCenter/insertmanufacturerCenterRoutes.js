const manufacturerControllers = require("../../controllers/manufacturerCenter/manufacturerControllers");

module.exports = insertmanufacturerCenterRoutes = {
  path: "/manufacturercenter/manufacturer",
  method: "post",
  handler: async (req, res) => {
    try {
      const manufacturerData = req.body;
      const response = await manufacturerControllers(manufacturerData);
      return res.status(200).send({
        message: "Manufacturer saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Manufacturer not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
