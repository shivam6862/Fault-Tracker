const mongoose = require("mongoose");
const v4 = require("uuid").v4;

const retailStoreCustomerSchema = new mongoose.Schema({
  customerID: {
    type: String,
    required: true,
    unique: true,
    default: v4,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const RetailStoreCustomer = mongoose.model(
  "RetailStoreCustomer",
  retailStoreCustomerSchema
);

module.exports = RetailStoreCustomer;
