const customerControllers = require("../../controllers/retailStore/customerControllers");

module.exports = customerRoutes = {
  path: "/retailstore/customer",
  method: "post",
  handler: async (req, res) => {
    try {
      const customerData = req.body;
      const response = await customerControllers(customerData);
      return res.status(200).send({
        message: "Customer saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Customer not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
