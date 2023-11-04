const mongoose = require("mongoose");
const v4 = require("uuid").v4;

const rawMaterialSchema = new mongoose.Schema({
  materialID: {
    type: String,
    required: true,
    default: v4,
  },
  materialName: {
    type: String,
    required: true,
  },
  quantityAvailable: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  supplierID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
  },
});

const RawMaterial = mongoose.model("RawMaterial", rawMaterialSchema);

module.exports = RawMaterial;
