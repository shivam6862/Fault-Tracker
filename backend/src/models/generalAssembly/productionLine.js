const mongoose = require("mongoose");

const productionLineSchema = new mongoose.Schema({
  lineName: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  currentStatus: {
    type: String,
    required: true,
  },
  supervisorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
});

const ProductionLine = mongoose.model("ProductionLine", productionLineSchema);

module.exports = ProductionLine;
