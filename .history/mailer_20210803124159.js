require('dotenv').config()
const nodemailer = require ('nodemailer');

let transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORDS,
    },
})

let result = transporter.sendMail({
    from: 'eframe.thumbnail@gmail.com',
    to: 'eframe.thumbnail@gmail.com',
    subject: '+1 Подписка на тестовый доступ — eframe.me',
    text: кц'
  })
  
  console.log(result)