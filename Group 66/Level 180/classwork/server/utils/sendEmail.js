const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // შენი იმეილი
        pass: process.env.EMAIL_PASS  // Gmail App Password
    }
});