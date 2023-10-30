const { db } = require("./db.js");

const writeInDatabase = async (name, index, data) => {
  try {
    // Insert a row into the table with an `INSERT INTO` statement
    const { meta: insert } = await db
      .prepare(`INSERT INTO ${name} (id, val) VALUES (?, ?);`)
      .bind(index, data)
      .run();

    // Wait for transaction finality
    await insert.txn.wait();
    return "Data is inserted into table successfully!";
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeInDatabase;
