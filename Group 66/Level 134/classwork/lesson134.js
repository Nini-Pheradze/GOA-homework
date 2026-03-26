// 1) კომენტარების სახით ახსენით თუ რა არის morgan, express.json() რაში ვიყენებთ ჩვენ მას, აგრეთვე ახსენით მათი დანიშნულება

// morgan არის third-party middleware
// მისი დანიშნულებაა HTTP request-ების ლოგირება (ჩაწერა) ტერმინალში
// // გვიჩვენებს:
// // - HTTP მეთოდს (GET, POST, DELETE…)
// // - URL-ს
// // - სტატუს კოდს (200, 404, 500)
// // - response-ის დროს
// // გამოიყენება დებაგინგისთვის და request-ების მონიტორინგისთვის

// const morgan = require('morgan');
// app.use(morgan('dev'));

// // express.json() არის built-in middleware
// // მისი დანიშნულებაა JSON ფორმატში მოსული მონაცემების წაკითხვა
// // მის გარეშე req.body იქნება undefined
// // გამოიყენება POST / PUT / PATCH მოთხოვნებზე

// app.use(express.json());

// // Custom middleware
// // აჩვენებს რომელი route გამოიძახეს

// const logger = (req, res, next) => {
//     console.log(`Request: ${req.method} ${req.url}`);
//     next();
// };

// module.exports = logger;


// // 2) შექმენით პროექტი სადაც შეგეძლებათ bikes - ების წამოღება, დამატება წაშლა და განახლება, მოცემული კოდები კი გადაანაწილეთ შესაბამის folder - ებში, ახსენით თქვენი სიტყევბით თუ რა არის controller, router, რა დადებითი მხარეები გააჩნიათ მათ, გამოიყენეთ შესაბამისი middleware ფუნქციები, მოცემული პროექტის მუშაობა კი გატესტეთ

// // Controller შეიცავს business logic-ს
// // აქ ვწერთ როგორ უნდა დაამუშაოს სერვერმა მონაცემები

// let bikes = [
//     { id: 1, name: "BMX", price: 500 },
//     { id: 2, name: "Mountain Bike", price: 1200 }
// ];

// // GET all bikes
// const getBikes = (req, res) => {
//     res.json(bikes);
// };

// // GET bike by id
// const getBikeById = (req, res) => {
//     const bike = bikes.find(b => b.id === Number(req.params.id));

//     if (!bike) {
//         return res.status(404).json({ message: "Bike not found" });
//     }

//     res.json(bike);
//     };

//     // POST add bike
//     const addBike = (req, res) => {
//     const newBike = {
//         id: Date.now(),
//         name: req.body.name,
//         price: req.body.price
//     };

//     bikes.push(newBike);
//     res.status(201).json(newBike);
//     };

//     // PUT update bike
//     const updateBike = (req, res) => {
//     const bike = bikes.find(b => b.id === Number(req.params.id));

//     if (!bike) {
//         return res.status(404).json({ message: "Bike not found" });
//     }

//     bike.name = req.body.name;
//     bike.price = req.body.price;

//     res.json(bike);
//     };

//     // DELETE bike
//     const deleteBike = (req, res) => {
//     bikes = bikes.filter(b => b.id !== Number(req.params.id));
//     res.json({ message: "Bike deleted" });
//     };

//     module.exports = {
//     getBikes,
//     getBikeById,
//     addBike,
//     updateBike,
//     deleteBike
// };

// const express = require('express');
// const { getBikes, getBike, createBike, updateBike, deleteBike } = require('../controllers/bikes.controller');

// const bikeRouter = express.Router();

// bikeRouter.get('/', getBikes);
// bikeRouter.get('/:id', getBike);
// bikeRouter.post('/', createBike);
// bikeRouter.patch('/:id', updateBike);
// bikeRouter.delete('/:id', deleteBike);

// module.exports = bikeRouter;



// const express = require('express');
// const morgan = require('morgan');
// const bikeRouter = require('./routers/bikes.router');

// const app = express();

// app.use(express.json());
// app.use(morgan('dev'));

// app.use('/bikes', bikeRouter);

// app.listen(3000, () => {
//   console.log('The server is running on port 3000');
// });

// let bikes = [
//     { id: 1, name: 'Mountain Bike', type: 'Off-road' },
//     { id: 2, name: 'Road Bike', type: 'Racing' },
//     { id: 3, name: 'Hybrid Bike', type: 'City' },
// ];

// const getBikes = (req, res) => {
//     res.json(bikes);
// };

// const getBike = (req, res) => {
//     const { id } = req.params;

//     const bike = bikes.find((b) => b.id === id * 1);

//     if(!bike){
//         return res.status(404).json({
//         message: 'Bike not found'
//         });
//     };

//     res.status(200).json(bike);
// };

// const createBike = (req, res) => {
//     const { name, type } = req.body;

//     if(!name || !type){
//         return res.status(400).json({
//         message: 'name and type is required!'
//         });
//     };

//     const newBike = {
//         id: bikes[bikes.length - 1].id + 1,
//         name,
//         type
//     };

//     bikes.push(newBike);

//     res.status(201).json(newBike);
// };

// const updateBike = (req, res) => {
//     const { id } = req.params;
//     const { name, type } = req.body;

//     const bike = bikes.find((b) => b.id === id * 1);

//     if(!bike){
//         return res.status(404).json({
//         message: 'Bike not found with given id!'
//         });
//     };

//     if (name) bike.name = name;
//     if (type) bike.type = type;

//     res.status(200).json(bike);
// };

// const deleteBike =  (req, res) => {
//     const { id } = req.params;
    
//     const bike = bikes.find((b) => b.id === id * 1);

//     if(!bike){
//         return res.status(404).json({
//         message: 'The bike with the given id not found!'
//         });
//     };

//     const index = bikes.findIndex((b) => b.id === id * 1);
//     bikes.splice(index, 1);

//     res.status(204).send();
// };

// module.exports = { getBikes, getBike, createBike, updateBike, deleteBike };