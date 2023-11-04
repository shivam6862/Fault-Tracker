const Customer = require("../../models/retailStore/customer");

module.exports = customerControllers = async (customerData) => {
  try {
    const customer = new Customer({ ...customerData });
    const response = await customer.save();
    return { responseRetailStore: response };
  } catch (err) {
    console.log("customerControllers", err.message);
    throw err;
  }
};
