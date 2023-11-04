const customerClaimControllers = require("../../controllers/defects/customerClaimControllers");

module.exports = customerClaimRoutes = {
  path: "/customerClaims",
  method: "post",
  handler: async (req, res) => {
    try {
      const customerClaimData = req.body;
      const response = await customerClaimControllers(customerClaimData);
      return res.status(200).send({
        message: "Customer Claim saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Customer Claim not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
