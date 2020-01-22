var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
const nodemailer = require('nodemailer')
const nodemail = require('../nodemailer')

app.use(cors())
var corsOptions = {
  origin: 'http:/localhost:8888',
  optionsSuccessStatus: 200
  // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect("https://google.pl")

});


// define the order route
router.post('/order', cors(), function (req, res) {
  console.log(req.body);
  const output = `
  <p> You have a new request </p>
  <h2> Contact Detail</h2>
  <ul>
  <li>${req.body.Name}</li>
  <li>${req.body.Mail}</li>
  <li>${req.body.Message}</li>
  </ul>
  `

  const confirmationOutput = `
  <p> Dziękujemy za zamówienie </p>
  <h2> Contact Detail</h2>
  <ul>
  <li>${req.body.Name}</li>
  <li>${req.body.Mail}</li>
  <li>${req.body.Message}</li>
  </ul>
  `

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'mail.clickdesign.pl',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'kontakt@clickdesign.pl', // generated ethereal user
        pass: '!Loleq123' // generated ethereal password
      }, tls: {
        rejectUnauthorized: false
      }
    });
    let list = ['emir.alobedi@gmail.com', 'kontakt@clickdesign.pl', 'kontakt@tanie-logo.pl']
    let confirmationAdresse = ['kontakt@tanie-logo.pl']

    // send mail with defined transport bject
    let info = await transporter.sendMail({
      from: req.body.Mail, // sender address
      to: list, // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    });
    let confirmMail = await transporter.sendMail({
      from: req.body.Mail, // sender address
      to: confirmationAdresse, // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: confirmationOutput // html body
    });

    console.log("Message sent!")
  }

  main().catch(console.error);




  res.redirect("https://google.pl")
})

module.exports = router;
