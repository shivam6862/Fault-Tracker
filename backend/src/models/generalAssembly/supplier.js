const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  supplierIds: {
    type: String,
    required: true,
    unique: true,
  },
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
