// 1) კომენტარების სახით ახსენით თუ რა არის morgan, express.json() რაში ვიყენებთ ჩვენ მას, აგრეთვე ახსენით მათი დანიშნულება

// morgan არის third-party middleware
// მისი დანიშნულებაა HTTP request-ების ლოგირება (ჩაწერა) ტერმინალში
// გვიჩვენებს:
// - HTTP მეთოდს (GET, POST, DELETE…)
// - URL-ს
// - სტატუს კოდს (200, 404, 500)
// - response-ის დროს
// გამოიყენება დებაგინგისთვის და request-ების მონიტორინგისთვის

const morgan = require('morgan');
app.use(morgan('dev'));

// express.json() არის built-in middleware
// მისი დანიშნულებაა JSON ფორმატში მოსული მონაცემების წაკითხვა
// მის გარეშე req.body იქნება undefined
// გამოიყენება POST / PUT / PATCH მოთხოვნებზე

app.use(express.json());

// Custom middleware
// აჩვენებს რომელი route გამოიძახეს

const logger = (req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
};

module.exports = logger;


// 2) შექმენით პროექტი სადაც შეგეძლებათ bikes - ების წამოღება, დამატება წაშლა და განახლება, მოცემული კოდები კი გადაანაწილეთ შესაბამის folder - ებში, ახსენით თქვენი სიტყევბით თუ რა არის controller, router, რა დადებითი მხარეები გააჩნიათ მათ, გამოიყენეთ შესაბამისი middleware ფუნქციები, მოცემული პროექტის მუშაობა კი გატესტეთ

// Controller შეიცავს business logic-ს
// აქ ვწერთ როგორ უნდა დაამუშაოს სერვერმა მონაცემები

let bikes = [
    { id: 1, name: "BMX", price: 500 },
    { id: 2, name: "Mountain Bike", price: 1200 }
];

// GET all bikes
const getBikes = (req, res) => {
    res.json(bikes);
};

// GET bike by id
const getBikeById = (req, res) => {
    const bike = bikes.find(b => b.id === Number(req.params.id));

    if (!bike) {
        return res.status(404).json({ message: "Bike not found" });
    }

    res.json(bike);
    };

    // POST add bike
    const addBike = (req, res) => {
    const newBike = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    };

    bikes.push(newBike);
    res.status(201).json(newBike);
    };

    // PUT update bike
    const updateBike = (req, res) => {
    const bike = bikes.find(b => b.id === Number(req.params.id));

    if (!bike) {
        return res.status(404).json({ message: "Bike not found" });
    }

    bike.name = req.body.name;
    bike.price = req.body.price;

    res.json(bike);
    };

    // DELETE bike
    const deleteBike = (req, res) => {
    bikes = bikes.filter(b => b.id !== Number(req.params.id));
    res.json({ message: "Bike deleted" });
    };

    module.exports = {
    getBikes,
    getBikeById,
    addBike,
    updateBike,
    deleteBike
};

