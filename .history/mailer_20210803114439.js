const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: testEmailAccount.user,
      pass: testEmailAccount.pass,
    },
})

let mailOptions = {
    from: 'eframe.thumbnail@gmail.com',
    to: 'eframe.thumbnail@gmail.com',
    subject: 'Подписка на тестовый доступ — eframe.me',
    text: 'x'
  }

  transporter.sendMail(mailOptions)
  
  console.log(result)