let nodemailer = require ('nodemailer');

let transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: testEmailAccount.user,
      pass: testEmailAccount.pass,
    };
})

let mailOptions