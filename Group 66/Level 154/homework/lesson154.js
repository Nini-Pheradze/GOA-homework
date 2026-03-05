const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // 1. ტრანსპორტერის შექმნა (Mailtrap-ის მონაცემებით)
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: "თქვენი_მომხმარებელი", // ჩასვით Mailtrap-დან
        pass: "თქვენი_პაროლი"      // ჩასვით Mailtrap-დან
        }
    });

    // 2. იმეილის პარამეტრები
    const mailOptions = {
        from: '"Social Media Team" <no-reply@social.com>',
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    // 3. გაგზავნა
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

const mongoose = require('mongoose');
const sendEmail = require('../utils/email');

    const userSchema = new mongoose.Schema({
    // ... სხვა ველები (username, email, password)
    isVerified: { type: Boolean, default: false },
    verificationCode: String
    });

    // მეთოდი კოდის გენერაციისთვის და გაგზავნისთვის
    userSchema.methods.sendVerificationCode = async function() {
    // 4-ნიშნა შემთხვევითი კოდის გენერაცია
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    this.verificationCode = code;
    
    await this.save();

    await sendEmail({
        email: this.email,
        subject: 'თქვენი ვერიფიკაციის კოდი',
        message: `გამარჯობა, თქვენი კოდია: ${code}`
    });
    };

    module.exports = mongoose.model('User', userSchema);

    const User = require('../models/User');

    // რეგისტრაცია
    exports.signup = async (req, res) => {
    try {
        const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
        });

    // კოდის გაგზავნის მეთოდის გამოძახება
    await newUser.sendVerificationCode();

        res.status(201).json({
        status: 'success',
        message: 'კოდი გაიგზავნა თქვენს ელ-ფოსტაზე'
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    // იმეილის დადასტურება (Verify)
    exports.verifyEmail = async (req, res) => {
    try {
        const { code } = req.body;

        // ვეძებთ მომხმარებელს მოცემული კოდით
        const user = await User.findOne({ verificationCode: code });

        if (!user) {
        return res.status(400).json({ message: 'კოდი არასწორია' });
        }

        // სტატუსის განახლება და კოდის წაშლა (უსაფრთხოებისთვის)
        user.isVerified = true;
        user.verificationCode = undefined;
        await user.save();

        res.status(200).json({ message: 'იმეილი წარმატებით დადასტურდა!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};