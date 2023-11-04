const defectsControllers = require("../../controllers/defects/defectsControllers");

module.exports = defectsRoutes = {
  path: "/defects",
  method: "post",
  handler: async (req, res) => {
    try {
      const defectsData = req.body;
      const response = await defectsControllers(defectsData);
      return res.status(200).send({
        message: "Defect saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Defect not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
