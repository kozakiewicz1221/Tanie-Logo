module.exports = {
    nodemailer: function () {

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
            let testAccount = await nodemailer.createTestAccount();

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


            console.log('Message sent: %s', info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

            res.render('main', { msg: 'has been sent' })
        }

        main().catch(console.error);

    },
    bar: function () {
        // whatever
    }
};

var zemba = function () {
}