const nodemailer = require("nodemailer");
const moment = require("moment");
const db = require("../db");
const SQL = require("sql-template-strings");
const mysql = require("mysql");

exports.neworder = async (req, res) => {
  console.log(req.body);

  let arr = [];
  let dodatkowe = await req.body.dodatkowe.map((x) => {
    arr.push(x.name);
  });
  arr = arr.join(", ");
  console.log(arr);
  // DB CONFIG
  var db = mysql.createConnection({
    host: "77.72.0.150",
    user: "backend_app",
    password: "!LoLeQ3@1",
    database: "backend_app",
  });
  db.connect((err) => {
    if (err) throw err;
  });
  // DB QUERY
  db.query(
    SQL`INSERT INTO orders VALUES(
      DEFAULT, 
      ${req.body.name}, 
    ${req.body.tel},
    ${req.body.email}, 
    ${req.body.logoQty},
    ${arr},
    ${req.body.license},
    ${req.body.time},
    ${req.body.description},
    ${req.body.payment},
    ${req.body.fvat},
    "file", 
    "${moment().format()}" )`,
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
  // // MAILS SENDER
  // console.log();
  // const adminMsg = `
  // <h1> Nowe zamówienie Tanie-logo</h1>
  // <p>Zamówienie nr: ${req.body.orderNr}</p>
  // <ul>
  // <li>Imie i nazwisko: ${req.body.name}</li>
  // <li>E-mail: ${req.body.email}</li>
  // <li>telefon: ${req.body.tel}</li>
  // <li>Płatnośc: ${req.body.payment}</li>
  // <li>Razem: ${req.body.razem}</li>
  // <li>Ile logo?: ${req.body.logoQty}</li>
  // <li>Dodatkowe uslugi: ${req.body.dodatkowe}</li>
  // <li>Opis: ${req.body.description}</li>
  // <li>Prawa autorskie: ${req.body.license}</li>
  // <li>Czas realizacji: ${req.body.time}</li>
  // </ul>
  // `;

  // const customerMsg = `
  // <p> Dziękujemy za zamówienie </p>
  // `;

  // async function main() {
  //   let transporter = nodemailer.createTransport({
  //     host: "mail.tanie-logo.pl",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: "kontakt@tanie-logo.pl",
  //       pass: "!Loleq123",
  //     },
  //     tls: {
  //       rejectUnauthorized: false,
  //     },
  //   });

  //   await transporter.sendMail({
  //     from: "kontakt@tanie-logo.pl",
  //     to: "kontakt@tanie-logo.pl",
  //     subject: "Nowe zamówienie",
  //     attachments: [
  //       {
  //         filename: "text1.pdf",
  //         content: "hello world!",
  //       },
  //     ],
  //     html: adminMsg,
  //   });

  //   await transporter.sendMail({
  //     from: "kontakt@tanie-logo.pl",
  //     to: "emir.alobedi@gmail.com",
  //     subject: `Zamówienie nr ${req.body.orderNr}`,
  //     html: customerMsg,
  //   });
  // }

  // main().catch(console.error);
  res.send("https://google.pl");
};

exports.deleteorders = (req, res) => {
  var db = mysql.createConnection({
    host: "77.72.0.150",
    user: "backend_app",
    password: "!LoLeQ3@1",
    database: "backend_app",
  });
  db.connect((err) => {
    if (err) throw err;
  });
  let sql = `DELETE FROM orders`;
  db.query(sql, (err, result) => {
    console.log("---Deleted all orders----");
    res.send("deleted");
  });
};