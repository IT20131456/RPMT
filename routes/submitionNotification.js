
const express = require("express");
const nodemailer = require('nodemailer');

const notify = express.Router();

notify.post('/submitiont/email',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false, 
        port: 587, 
        tls: {
        ciphers:'SSLv3'
        },
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD
        }
    });
 
    var mailOptions = {
        from: process.env.MAIL_FROM,// sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text:req.body.text,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>SLIIT</p>
        <h3>Research Team</h3>
        <ul>
            <li>Email: ${req.body.to}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.text}</li>
        </ul>
        `
    };
     
    transporter.sendMail(mailOptions, function(error, info){
      
        if (error)
        {
          console.log(error);
          res.json({status: true, respMesg: 'Email Sent is not Successful'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});

module.exports = notify;