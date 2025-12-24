// 2) შექმენით AI დახმარებით products.jsonფაილი, რომელშიც 50 მდე სხვადასხვა კატეგორიის პროდუქტები იქნება მოცემული JSON ფორმატში, როდესაც მოთხოვნას მიიღებთ გამოიყენეთ URL კონსტრუქტორი ლინკის ნაკუწებად გადასაქცევად შემდეგ querystring.parse მეთოდი, query (საძიებელი სიტყვების) ობიექტის სახიდ გარდაქმნისთვის, გექნებათ ორი ფილტარატორი ფასი და კატეგორია, რის მიხედვითაც უნდა დააბრუნოთ JSON სახით ინფორმაცია

// მაგ: /products?category=medicine

// result: 

// [
//  {
//    id:1,
//  }
// } 


const fs = require('fs');
const http = require('http');

const products = (JSON.parse(fs.readFileSync('./products.json', 'utf-8'))).products;

const server = http.createServer((req, res) => {
    const url = new URL(req.headers.host + req.url);
    const category = url.searchParams.get('category');
    const result = products.filter(product => product.category === category);

    res.writeHead(200, {
        'content-type': 'application/json'
    });
    res.end(JSON.stringify(result));
});

server.listen(3000, () => {
    console.log('Server is listening port 3000');
});