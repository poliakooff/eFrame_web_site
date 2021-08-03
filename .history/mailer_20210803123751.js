require('dotenv').config()
const nodemailer = require ('nodemailer');

let transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.,
      pass: 'Ubabel1962eframe',
    },
})

let result = transporter.sendMail({
    from: 'eframe.thumbnail@gmail.com',
    to: 'eframe.thumbnail@gmail.com',
    subject: 'Подписка на тестовый доступ — eframe.me',
    text: '+1 подписчик на тестовый доступ проекта eframe.me #eframetestaccess'
  })
  
  console.log(result)