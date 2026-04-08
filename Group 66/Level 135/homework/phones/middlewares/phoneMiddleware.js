const checkBody = (req, res, next) => {
    const { brand, model, price } = req.body;

    if (!brand || !price || ! model) {
        return res.status(400).json({
            status: "fail",
            message: "Missing required fields: brand, model, and price are mandatory!"
        });
    }

    next();
};

module.exports = { checkBody };