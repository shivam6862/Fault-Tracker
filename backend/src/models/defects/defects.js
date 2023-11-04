const mongoose = require("mongoose");

const defectsSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  defectType: {
    type: String,
    required: true,
  },
  reportedBy: {
    type: String,
    required: true,
  },
  dateReported: {
    type: Date,
    default: Date.now,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "working", "ok"],
    default: "pending",
  },
});

const Defects = mongoose.model("Defects", defectsSchema);

module.exports = Defects;
