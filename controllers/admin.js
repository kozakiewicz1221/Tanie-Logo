const database = require("../db");
const SQL = require("sql-template-strings");
const mysql = require("mysql");

exports.admin = (req, res) => {
  var db = mysql.createConnection({
    host: "77.72.0.150",
    user: "backend_app",
    password: "!LoLeQ3@1",
    database: "backend_app",
  });
  db.connect((err) => {
    if (err) throw err;
  });
  db.query(SQL`SELECT * FROM orders ORDER BY id DESC`, (err, result) => {
    if (err) throw err;
    console.log();
    res.json(result);
  });
};
