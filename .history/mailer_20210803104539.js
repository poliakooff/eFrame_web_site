let nodemailer = require ('nodemailer');

let transporter = nodemailer.createTestAccount ({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: testEmailAccount.user,
      pass: testEmailAccount.pass,
    },
})

let result = await transporter.sendMail({
    from: 'eframe.thumbnail@gmail.com',
    to: 'eframe.thumbnail@gmail.com',
    subject: 'Подпи',
    text: 'This message was sent from Node js server.',
    html:
      'This <i>message</i> was sent from <strong>Node js</strong> server.',
  })
  
  console.log(result)