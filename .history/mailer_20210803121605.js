require('dotenv').config()
const nodemailer = require ('nodemailer');

let teframe.thumbnail@gmail.com = await nodemailer.createTestAccount()

let transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: eframe.thumbnail@gmail.com.user,
      pass: Ubabel1962eframe.PASSWORDS,
    },
})

let result = await transporter.sendMail({
    from: 'eframe.thumbnail@gmail.com',
    to: 'eframe.thumbnail@gmail.com',
    subject: 'Подписка на тестовый доступ — eframe.me',
    text: '+1 подписчик на тестовый доступ проекта eframe.me #eframetestaccess'
  })
  
  console.log(result)