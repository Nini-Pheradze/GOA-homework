let bikes = [
    { id: 1, name: "Mountain Bike", price: 500 },
    { id: 2, name: "Road Bike", price: 700 }
];

exports.getAllBikes = (req,res) => {
    res.json(bikes);
};


// axali bike dasamateblad
exports.createBike = (req, res) => {
    const newBike = { id : bikes.length + 1, ...req.body };
    bikes.push(newBike);
    res.status(201).json(newBike);
};

// ganaxlebistvis
exports.updateBike = (req, res) => {
    const { id } = req.params;
    const index = bikes.findLastIndex(b=> b.id === parseInt(id));
    if (index !== -1) {
        bikes[index] = { ...bikes[index], ...req.body };
        res.json(bikes[index]);
    } else {
        res.status(404).json({ message: "ველოსიპედი ვერ მოიძებნა" });
    }
};


// washashlelad
exports.deleteBike = (req, res) => {
    bikes = bikes.filter(b => b.id !== parseInt(req.params.id));
    res.json({ message: "წარმატებით წაიშალა" });
};

