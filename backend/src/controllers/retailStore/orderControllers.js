const Order = require("../../models/retailStore/order");

module.exports = orderController = async (orderData) => {
  try {
    const order = new Order({ ...orderData });
    const response = await order.save();
    return { responseRetailStore: response };
  } catch (err) {
    console.log("orderController", err.message);
    throw err;
  }
};
