import mysql from "mysql";
import util from "util";

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "abc.123",
  database: "notes",
});

// Promisify the query function
export const queryAsync = util.promisify(db.query).bind(db);
