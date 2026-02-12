// handlePostRequest ფუნქციაში უნდა მიიღოთ და წაიკიტხოთ ინფორმაცია რომელიც გამოგვიუგზავნეს

// შემდეგ შეამოწქმეთ ბილიკი, თუ ბილიკი უდრის /product დაამატეთ მიღებული ობიექტი მასივში

// სტრუქტურა სატესტო ობიექტის რომელიც უნდა გააგზავნოთ POSTMAN დან

// ობიექტის კუთვნილებები: 

// {
//             "id": 1,
//             "name": "Wireless Headphones",
//             "category": "electronics",
//             "price": 79.99,
//             "description": "High-quality wireless headphones with noise cancellation"
//     } (ეს არის ობიექტის მაგალითი რომელიც უნდა გააგზავნოთ)

// წაკითხვის შემდეგ დაამატეთ products მასივში ახალი ობიექტი და ავტომატურად მიანიჭეთ id 

// 3) createServer მეთოდში გადაცემულ ფუნქციაში გამოიყენეთ switch რომ შეამოწმოთ მეთოდი, თუ მეთოდი არის GET გამოიძახეთ handleGetRequest, POSTმეთოდის შემთხვევაში გამოიძახეთ handlePostRequest, ხოლო თუ არცერთი მეთოდი არაა დააბრუნეთ ერორი სადაც ახსნით რომ ეს მეთოდი განსაზღვრული არაა
// BONUS:

// 1) დაამატეთ DELETE მეთოდი რომლითაც წაშლით პროდუქტს სიიდან

// 2) დამატების ან წასლში შემთხვევაში შეცვალეთ products.json ფაილიც.

const http = require('http');

const server = http.createServer((req, res) => {
    const method = req.method;
    switch (method) {
        case 'GET':
        handleGetRequest(req, res);
        break;
        case 'POST':
        handlePostRequest(req, res);
        break;
        case 'DELETE':
        handleDeleteRequest(req, res);
        break;
        default:
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ 
            error: 'მეთოდი განსაზღვრული არაა',
            message: `${method} მეთოდი არ არის მხარდაჭერილი. გამოიყენეთ GET, POST ან DELETE`
        }));
        break;
    }
});


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
