const Defects = require("../../models/defects/defects");

module.exports = defectsControllers = async (defectsData) => {
  try {
    const defects = new Defects({
      ...defectsData,
    });
    const response = await defects.save();
    return { responseDefects: response };
  } catch (err) {
    console.log("defects Controllers", err.message);
    throw err;
  }
};
