const sendVerificationEmail = async (userEmail, token) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
    });

    const url = `http://localhost:3000/verify-email/${token}`;

    await transporter.sendMail({
        to: userEmail,
        subject: 'Verify your email',
        html: `Click <a href="${url}">here</a> to verify your account.`
    });
};