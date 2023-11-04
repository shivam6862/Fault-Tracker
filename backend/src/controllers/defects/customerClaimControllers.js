const CustomerClaim = require("../../models/defects/customerClaim");

module.exports = customerClaimControllers = async (customerClaimData) => {
  try {
    const customerClaim = new CustomerClaim({
      ...customerClaimData,
    });
    const response = await customerClaim.save();
    return { responseCustomerClaim: response };
  } catch (err) {
    console.log("customerClaimControllers", err.message);
    throw err;
  }
};
