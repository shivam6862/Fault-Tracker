const supplierControllers = require("../../controllers/generalAssembly/supplierControllers");

module.exports = supplierRoutes = {
  path: "/generalassembly/supplier",
  method: "post",
  handler: async (req, res) => {
    try {
      const supplierData = req.body;
      const response = await supplierControllers(supplierData);
      return res.status(200).send({
        message: "Supplier saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Supplier not saved!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
