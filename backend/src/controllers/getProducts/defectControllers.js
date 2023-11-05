const Defect = require("../../models/defects/defects");

module.exports = defectsController = async () => {
  try {
    const defects = await Defect.find();
    return defects;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
