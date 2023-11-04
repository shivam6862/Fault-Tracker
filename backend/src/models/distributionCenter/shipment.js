const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  shipmentID: {
    type: String,
    required: true,
    unique: true,
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  supplierID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  shipmentDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  deliveryStatus: {
    type: String,
    enum: ["in transit", "delivered", "pending"],
    default: "pending",
    required: true,
  },
});

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;
