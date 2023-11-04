const mongoose = require("mongoose");
const v4 = require("uuid").v4;

const customerClaimSchema = new mongoose.Schema({
  claimID: {
    type: String,
    required: true,
    unique: true,
    default: v4,
  },
  claimDescription: {
    type: String,
    required: true,
  },
  claimDate: {
    type: Date,
    default: Date.now,
  },
  orderID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RetailStoreOrder",
    required: true,
  },
});

const CustomerClaim = mongoose.model("CustomerClaim", customerClaimSchema);

module.exports = CustomerClaim;
