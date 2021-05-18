const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  auth: {
    type: "login",
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

// Verify Connection Config
transporter.verify((err, success) => {
  if (err) {
    throw err;
  }

  console.log("Server is ready to receive messages");
});

module.exports = {
  send: async (mailData) => {
    transporter.sendMail(mailData, (err, success) => {
      if (err) {
        throw err;
      }

      return success;
    });
  },
};
