const DistributionCenter = require("../../models/distributionCenter/distributionCenter");

module.exports = distributionCenterControllers = async (
  distributionCenterData
) => {
  try {
    const distributionCenter = new DistributionCenter({
      ...distributionCenterData,
    });
    const response = await distributionCenter.save();
    return { responseDistributionCenter: response };
  } catch (err) {
    console.log("distributionCenter Controllers", err.message);
    throw err;
  }
};
