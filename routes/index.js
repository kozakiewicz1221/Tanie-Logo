var express = require("express");
var router = express.Router();
<<<<<<< HEAD
const neworder = require("../controllers/neworder");
const admin = require("../controllers/admin");

router.post("/api/order", neworder.neworder);
router.get("/api/deleteorders", neworder.deleteorders);
router.get("/api/admin", admin.admin);
=======
var app = express();
var path = require("path");

// NODEMAILER
const nodemailer = require("nodemailer");

// MULTER
var multer = require("multer");
var upload = multer({ dest: __dirname + "/uploads" });

// FIREBASE CLOUD FIRESTORE
const admin = require("firebase-admin");
const serviceAccount = require("../ServiceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// CORS
var cors = require("cors");
app.use(cors());
var corsOptions = {
  origin: "http:/localhost:8000/",
  optionsSuccessStatus: 200
};

// BODY PARSER
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER /

router.get("/", function(req, res, next) {
  res.send("Home");
});

// ORDER POST REQUERS
router.post("/order", cors(corsOptions), upload.single("avatar"), function(
  req,
  res
) {
  console.log(req.body);

  let saveToDb = db
    .collection("orders")
    .doc(req.body.name)
    .set(req.body);

  const output = `
  <p> You have a new request </p>
  <h2> Contact Detail</h2>
  <ul>
  <li>Imie i nazwisko: ${req.body.name}</li>
  <li>E-mail: ${req.body.email}</li>
  <li>telefon: ${req.body.tel}</li>
  <li>Płatnośc: ${req.body.payment}</li>
  <li>Razem: ${req.body.razem}</li>
  <li>Ile logo?: ${req.body.logoQty}</li>
  <li>Dodatkowe uslugi: ${req.body.dodatkowe}</li>
  <li>Opis: ${req.body.description}</li>
  <li>Prawa autorskie: ${req.body.license}</li>
  <li>Czas realizacji: ${req.body.time}</li>
  </ul>
  `;

  const confirmationOutput = `
  <p> Dziękujemy za zamówienie </p>
  <h2> Contact Detail</h2>
  <ul>
  <li>${req.body.name}</li>
  <li>${req.body.email}</li>
  <li>${req.body.message}</li>
  </ul>
  `;

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.clickdesign.pl",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "kontakt@clickdesign.pl", // generated ethereal user
        pass: "!Loleq123" // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    let list = ["kontakt@clickdesign.pl"];
    let confirmationAdresse = [req.body.email];

    // send mail with defined transport bject
    let info = await transporter.sendMail({
      from: req.body.mail, // sender address
      to: list, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    });
    let confirmMail = await transporter.sendMail({
      from: req.body.mail, // sender address
      to: confirmationAdresse, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: confirmationOutput // html body
    });
  }

  main().catch(console.error);
});
>>>>>>> 06ddfb21de1e5f0e35a63ecccf5a23cc04f9b0ca

module.exports = router;
