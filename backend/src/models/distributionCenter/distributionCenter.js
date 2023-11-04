const mongoose = require("mongoose");

const distributionCenterSchema = new mongoose.Schema({
  centerID: {
    type: String,
    required: true,
    unique: true,
  },
  centerName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  managerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

const DistributionCenter = mongoose.model(
  "DistributionCenter",
  distributionCenterSchema
);

module.exports = DistributionCenter;
