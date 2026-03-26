const signToken = user => {
    // 1) Payload - actuall data which we want to secure with encryption
    // 2) Secret Key - which we use for encryption/decryption
    // 3) Options - For example: Algorithm, Token valid time ...

    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const sendToken = (user, res) => {
    const token = signToken(user);

    res.cookie("jwt", token, {
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        secure: false, //if false it can be sented from http without security, if true only from https with SSL
        httpOnly: true, //if false it can be sented from any type of transporter protocol, but if true only from http protocol
        sameSite: "Lax" //if None domain any, if Lax security good but limited, if Strict only same domain transfers cookies
    });

    user.password = undefined;

    res.json(user);
}