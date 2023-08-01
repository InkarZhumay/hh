const nodemailer = require('nodemailer');

// Создайте транспорт для отправки электронной почты
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'inkarnz225@gmail.com', // Замените на свой адрес электронной почты Gmail
    pass: 'ownzybgqjwqfrfps' // Замените на свой пароль от электронной почты Gmail
  }
});

// Определите функцию для отправки электронного сообщения
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'inkarnz225@gmail.com', // Замените на свой адрес электронной почты Gmail
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendEmail;