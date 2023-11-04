const orderControllers = require("../../controllers/retailStore/orderControllers");

module.exports = orderRoutes = {
  path: "/retailstore/orders",
  method: "post",
  handler: async (req, res) => {
    try {
      const orderData = req.body;
      const response = await orderControllers(orderData);
      return res.status(200).send({
        message: "Order created successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Order not created!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
