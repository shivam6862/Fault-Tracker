const rawMaterialControllers = require("../../controllers/generalAssembly/rawMaterialControllers");

module.exports = rawMaterialRoutes = {
  path: "/generalassembly/rawmaterial",
  method: "post",
  handler: async (req, res) => {
    try {
      const rawMaterialData = req.body;
      const response = await rawMaterialControllers(rawMaterialData);
      return res.status(200).send({
        message: "Raw material saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Raw material not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
