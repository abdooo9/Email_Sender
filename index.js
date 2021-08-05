const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "",
    pass: "",
  },
});

transporter.sendMail({
  from: "", // sender address
  to: "", // list of receivers
  subject: "", // Subject line
  text: "", // plain text body
  html: "", // html body
}).then(info => {
  console.log({ info });
}).catch(console.error);
