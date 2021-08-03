require('dotenv').config()
const nodemailer = require ('nodemailer');

let testEmailAccount = await nodemailer.createTestAccount()

let transporter = nodemailer.createTestAccount ({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORDS,
    },
})

const start = async function(a, b) {
let result = await transporter.sendMail({
    from: 'eframe.thumbnail@gmail.com',
    to: 'eframe.thumbnail@gmail.com',
    subject: 'Подписка на тестовый доступ — eframe.me',
    text: '+1 подписчик на тестовый доступ проекта eframe.me #eframetestaccess'
  })
  
  console.log(result)
}

// Call start
start();