const defectsController = require("../../controllers/getProducts/defectControllers");

module.exports = getDefectsRoutes = {
  path: "/defects",
  method: "get",
  handler: async (req, res) => {
    try {
      const response = await defectsController();
      if (response.length === 0) {
        return res.status(400).send({
          message: "Defects Not Found for the given series ID!",
          response: [],
        });
      }
      return res.status(200).send({
        message: "Defects Found!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Error fetching defects for the given series ID!",
        response: [],
      });
    }
  },
};
