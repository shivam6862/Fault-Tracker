const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  contactPerson: {
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
