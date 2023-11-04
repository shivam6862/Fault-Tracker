const productControllers = require("../../controllers/generalAssembly/productControllers");

module.exports = productRoutes = {
  path: "/generalassembly/product",
  method: "post",
  handler: async (req, res) => {
    try {
      const productData = req.body;
      const response = await productControllers(productData);
      return res.status(200).send({
        message: "product saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "product not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
