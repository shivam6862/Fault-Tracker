const mongoose = require("mongoose");

const manufacturerSchema = new mongoose.Schema({
  manufacturerID: {
    type: String,
    required: true,
    unique: true,
  },
  manufacturerName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);

module.exports = Manufacturer;
