const productsControllers = require("../../controllers/getProducts/productsControllers");

module.exports = getProductsRoutes = {
  path: "/products/:searchQuery",
  method: "get",
  handler: async (req, res) => {
    try {
      const { searchQuery } = req.params;
      const products = await productsControllers(searchQuery);
      if (products.length === 0) {
        return res.status(400).send({
          message: "No Products Found!",
          response: products,
        });
      }
      return res.status(200).send({
        message: "Products Found!",
        response: products,
      });
    } catch (err) {
      return res.status(500).send({
        message: "Internal Server Error",
        response: err.message,
      });
    }
  },
};
