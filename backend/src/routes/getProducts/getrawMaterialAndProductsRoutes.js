const rawMaterialAndProductsControllers = require("../../controllers/getProducts/rawMaterialAndProductsControllers");

module.exports = getRawMaterialAndProductsRoutes = {
  path: "/rawMaterials/:searchQuery",
  method: "get",
  handler: async (req, res) => {
    try {
      const { searchQuery } = req.params;
      const response = await rawMaterialAndProductsControllers(searchQuery);
      if (response == null) {
        return res.status(400).send({
          message: "Raw Material Not Found!",
          response: response,
        });
      }
      return res.status(200).send({
        message: "Raw Material Found!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Raw Material Not Found!",
        response: err.message,
      });
    }
  },
};
