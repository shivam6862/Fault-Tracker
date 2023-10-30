const { db } = require("./db.js");
// This is the table's `prefix`--a custom table value prefixed as part of the table's name

const createDatabase = async (prefix) => {
  try {
    const { meta: create } = await db
      .prepare(`CREATE TABLE ${prefix} (id integer primary key, val text);`)
      .run();

    // The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
    const { name } = create.txn; // e.g., my_sdk_table_80001_311
    console.log(name);
  } catch (err) {
    console.log(err);
  }
};

const DB_PREFIX = process.env.DB_PREFIX;
createDatabase(DB_PREFIX);

// Change DB_PREFIX according to your choice in .env file
// Run this file via node to create new table
// node createDatabase.js
// Don't forget to note the database name in .env file after running createDatabase function
