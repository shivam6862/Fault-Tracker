const getSeriesProduct = require("../../controllers/getProducts/seriesProductControllers");

module.exports = getSeriesProductRoutes = {
  path: "/series/:seriesid/products",
  method: "get",
  handler: async (req, res) => {
    try {
      const { seriesid } = req.params;
      const response = await getSeriesProduct(seriesid);
      if (response.length === 0) {
        return res.status(400).send({
          message: "Products Not Found for the given series ID!",
          response: { subProductIDs: [] },
        });
      }
      return res.status(200).send({
        message: "Products Found!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Error fetching products for the given series ID!",
        response: { subProductIDs: [] },
      });
    }
  },
};
