const mongoose = require("mongoose");
const v4 = require("uuid").v4;

const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
    default: v4,
  },
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  manufacturingDate: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
  pattern: {
    type: String,
  },
  size: {
    type: String,
  },
  weight: {
    type: Number,
    required: true,
  },
  warrantyPeriod: {
    type: Number,
  },
  machineIdentifier: {
    type: String,
  },
  supplierID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
  },
  materialIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RawMaterial",
    },
  ],
  subProductIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
