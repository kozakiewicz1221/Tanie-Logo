const nodemailer = require("nodemailer");
const moment = require("moment");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

exports.neworder = async (req, res) => {
  // // MAILS SENDER
  console.log();
  const adminMsg = `
  <h1> Nowe zamówienie Tanie-logo</h1>
  <p>Zamówienie nr: ${req.body.orderNr}</p>
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

  const customerMsg = `
  <h1 >Tanie-logo.pl</h1>
  <h2 >Twoje zamówienie nr #${req.body.orderNr}</h2>

  <p>Zamówienie zostanie zrealizowane niezwłocznie po zaksięgowaniu płatności.</br> Jeśli nie dokonałeś jeszcze płatności to możesz to zrobić teraz.
  </p>
    <div>
        <a  href="https://google.pl">Płatnośc przez Dotpay</a>
    </div>
    <div>
      <a href="https://google.pl">Płatność przelewem bankowym</a>
    </div>
  `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "mail.tanie-logo.pl",
      port: 465,
      secure: true,
      auth: {
        user: "kontakt@tanie-logo.pl",
        pass: "!LoLeQ3@1",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: "kontakt@tanie-logo.pl",
      to: "kontakt@tanie-logo.pl",
      subject: "Nowe zamówienie",
      attachments: [
        {
          filename: "text1.pdf",
          content: "hello world!",
        },
      ],
      html: adminMsg,
    });

    await transporter.sendMail({
      from: "kontakt@tanie-logo.pl",
      to: "emir.alobedi@gmail.com",
      subject: `Zamówienie nr ${req.body.orderNr}`,
      html: customerMsg,
    });
  }

  main().catch(console.error);

  let arr = [];
  let dodatkowe = await req.body.dodatkowe.map((x) => {
    arr.push(x.name);
  });
  arr = arr.join(", ");

  // SAVE ORDER TO DB
  const uri =
    "mongodb+srv://emir1221:!Loleq123@cluster0-xwshn.mongodb.net/TanieLogo?retryWrites=true&w=majority";

  MongoClient.connect(uri, { useUnifiedTopology: true }, (error, client) => {
    if (error) console.log(error);
    const db = client.db("TanieLogo");

    db.collection("orders").insertOne(
      { ...req.body, dodatkowe: arr },
      (err, result) => {
        if (err) console.log(err);
        res.send("ok");
      }
    );
  });
};
