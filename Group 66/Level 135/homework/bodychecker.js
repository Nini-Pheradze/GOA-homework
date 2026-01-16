/*
    Body checker middleware
    ამოწმებს არის თუ არა body-ში ტელეფონისთვის აუცილებელი ველები

    აუცილებელი ველები:
    - brand
    - model
    - price

    თუ რომელიმე არ არსებობს → აბრუნებს error-ს
    */

    const bodyChecker = (req, res, next) => {
    const { brand, model, price } = req.body;

    if (!brand || !model || !price) {
        return res.status(400).json({
        message: "brand, model and price are required"
        });
    }

    next(); // თუ ყველაფერი სწორია, route-ზე გადადის
};

module.exports = bodyChecker;

