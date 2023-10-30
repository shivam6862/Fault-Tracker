const { db } = require("./db.js");
// This is the table's `prefix`--a custom table value prefixed as part of the table's name

const readDatabase = async (name) => {
  try {
    // Perform a read query, requesting `all` rows from the table
    const { results } = await db.prepare(`SELECT * FROM ${name};`).all();
    return results;
  } catch (err) {
    console.log(err);
  }
};

module.exports = readDatabase;
