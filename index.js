const nodemailer = require('nodemailer');
require("dotenv").config()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.username,
    pass: process.env.password,
  },
});

transporter.sendMail({
  from: process.env.username,
  to: "",
  subject: "",
  text: "",
  html: "",
}).then(info => {
  console.log({ info });
}).catch(console.error);
