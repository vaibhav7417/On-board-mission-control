const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "telemetry_db"
});

db.connect((err) => {
  if (err) throw err;
  console.log("DB Connected");
});

module.exports = db;