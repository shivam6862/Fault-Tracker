const distributionCenterControllers = require("../../controllers/distributionCenter/distributionCentercontroller");

module.exports = insertdistributionCenterRoutes = {
  path: "/distributioncenter",
  method: "post",
  handler: async (req, res) => {
    try {
      const distributionCenterData = req.body;
      const response = await distributionCenterControllers(
        distributionCenterData
      );
      return res.status(200).send({
        message: "Distribution Center saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Distribution Center not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
