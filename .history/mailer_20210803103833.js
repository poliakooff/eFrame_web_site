const nodemailer = require ('nodemailer');

const transporter = nodemailer.createTransport ({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testEmailAccount.user,
      pass: testEmailAccount.pass,
})