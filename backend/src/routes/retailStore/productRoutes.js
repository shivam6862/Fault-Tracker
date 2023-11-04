const productControllers = require("../../controllers/retailStore/productControllers");

module.exports = productRoutes = {
  path: "/retailstore/products",
  method: "post",
  handler: async (req, res) => {
    try {
      const productData = req.body;
      const response = await productControllers(productData);
      return res.status(200).send({
        message: "Product saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Product not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
