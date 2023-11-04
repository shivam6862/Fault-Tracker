const mongoose = require("mongoose");

const retailStoreProductSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantityAvailable: {
    type: Number,
    required: true,
  },
  manufacturerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manufacturer",
    required: true,
  },
});

const RetailStoreProduct = mongoose.model(
  "RetailStoreProduct",
  retailStoreProductSchema
);

module.exports = RetailStoreProduct;
