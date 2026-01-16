/*
    Custom middleware
    უბრალოდ გვიჩვენებს რომელი route გამოიძახეს
*/

const logger = (req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
};

module.exports = logger;
