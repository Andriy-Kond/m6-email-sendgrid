// const sgMail = require("@sendgrid/mail");
import sgMail from "@sendgrid/mail";
import "dotenv/config";
// import { sendEmail } from "./helpers/sendEmail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY_TEST_PROJECT);

const msg = {
  to: "sivim78851@citdaca.com", // Change to your recipient
  from: "andreyall2@meta.ua", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<p> some email <strong>and easy to do anywhere, even with Node.js</strong></p>",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch(error => {
    console.error(error);
  });

// sendEmail({
//   to: "sivim78851@citdaca.com", // Change to your recipient
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<p> some email <strong>and easy to do anywhere, even with Node.js</strong></p>",
// });
