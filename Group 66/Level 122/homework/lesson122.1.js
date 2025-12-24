//  კომენტარების სახით ახსენით თუ რა არის query, რა განსხვავებაა query - path შორის, მოიყვანეთ მაგალითებიც

// შექმენით თქვენი server, შეამოწმეთ იმ შემთხვევაში თუ ბილიკი უდრის /students და მეთოდი უდრის 'GET' - ს მაშინ გამოიტანეთ query text - ში არსებული მნიშვნელობა მაგალითად ?text=Hello World!

// ვქმნით http მოდულის გამოყენებით მარტივ server-ს
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (path === "/students" && req.method === "GET") {
        const text = query.text;

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(text ? text : "No text provided");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
    });

    server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
    });



// QUERY (query string):
// Query არის URL-ის ის ნაწილი, რომელიც გამოიყენება დამატებითი მონაცემების
// გადასაცემად სერვერისთვის.
// ის იწყება ? სიმბოლოთი და შედგება key=value წყვილებისგან.
// რამდენიმე query ერთმანეთისგან გამოიყოფა & ნიშნით.
//
// მაგალითი:
// /users?name=Giorgi&age=20
// აქ:
// name=Giorgi  -> query
// age=20       -> query
//
// Node.js / Express-ში query მონაცემებს ვიღებთ ასე:
// req.query.name  -> "Giorgi"
// req.query.age   -> "20"


// PATH (route / pathname):
// Path არის URL-ის ძირითადი ნაწილი, რომელიც განსაზღვრავს
// რომელი რესურსი ან ლოგიკა უნდა შესრულდეს სერვერზე.
// Path არ შეიცავს ?-ის შემდეგ ნაწილს.
//
// მაგალითი:
// /users
// /products
// /students
//
// მაგალითად:
// GET /students
// აქ /students არის path



// განსხვავება QUERY-სა და PATH-ს შორის:
//
// 1) Path:
//    - განსაზღვრავს რომელი endpoint/route შესრულდეს
//    - არის სავალდებულო
//    - მაგალითი: /products
//
// 2) Query:
//    - გადასცემს დამატებით ინფორმაციას
//    - არ არის სავალდებულო
//    - მაგალითი: ?category=phone&price=1000
//
// სრული URL მაგალითი:
// /products?category=phone&price=1000
//
// აქ:
// Path  -> /products
// Query -> category=phone, price=1000
