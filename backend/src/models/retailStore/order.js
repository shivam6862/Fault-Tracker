const mongoose = require("mongoose");

const retailStoreOrderOrderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
    unique: true,
  },
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RetailStoreCustomer",
    required: true,
  },
  products: [
    {
      productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RetailStoreProduct",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "shipped", "delivered"],
    default: "pending",
  },
});

const RetailStoreOrder = mongoose.model(
  "RetailStoreOrder",
  retailStoreOrderOrderSchema
);

module.exports = RetailStoreOrder;
