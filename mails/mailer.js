'use strict';
const nodemailer = require('nodemailer');

async function mail(name, lastname, email, phone, address) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'Ivan_567.92@mail.ru',
      pass: ''
    },
  });

  let info = await transporter.sendMail({
    from: 'Ivan_567.92@mail.ru',
    to: email,
    subject: 'Спецификация',
    text: `Добрый день. Во вложении спецификация и картинка для печати\nИнформация о заказе:\nИмя: ${name}\nФамилия: ${lastname}\nE-mail: ${email}\nТелефон: ${phone}\nАдрес доставки: ${address}`,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

module.exports = mail;