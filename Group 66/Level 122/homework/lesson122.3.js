// უნდა გქონდეთ ბილიკი და query, 
// ბილიკი ---> /user-age 
// query ---> ?age={age}, 
// ჯერ შეამოწმეთ ბილიკი და მეთოდი, შემდეგ ასაკი, თუ ასაკი არის მეტი 18 - ზე გამოიტანეთ მნიშვნელობა 'You are an adult' თუ ასაკი არის 18 - ზე ნაკლები გამოიტანეთ 'You are a kid' სხვა შემთხვევაში კი 'Invalid Age'

const http = require('http');

const server = http.createServer((req, res) => {
    const baseURL = `http://${req.headers.host}`;
    const myUrl = new URL(req.url, baseURL);
    
    const path = myUrl.pathname;
    const method = req.method;
    const age = myUrl.searchParams.get('age');

    if (path === '/user-age' && method === 'GET') {
        if (age === null || age === '' || isNaN(age)) {
            res.end('Invalid Age');
        } 
        else {
            const ageNum = parseInt(age);

            if (ageNum >= 18) {
                res.end('You are an adult');
            } else if (ageNum >= 0 && ageNum < 18) {
                res.end('You are a kid');
            } else {
                res.end('Invalid Age');
            }
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


// --- 1xx: საინფორმაციო (Informational) ---
// 100 - Continue: ყველაფერი რიგზეა, მოთხოვნა გრძელდება.
// 101 - Switching Protocols: სერვერი თანახმაა გადავიდეს სხვა პროტოკოლზე (მაგ: WebSocket).

// --- 2xx: წარმატება (Success) ---
// 200 - OK: მოთხოვნა წარმატებით შესრულდა (ყველაზე გავრცელებული).
// 201 - Created: მოთხოვნა წარმატებით შესრულდა და რესურსი შეიქმნა.
// 204 - No Content: მოთხოვნა წარმატებულია, მაგრამ დასაბრუნებელი შინაარსი არ არის.

// --- 3xx: გადამისამართება (Redirection) ---
// 301 - Moved Permanently: რესურსი სამუდამოდ გადავიდა სხვა მისამართზე.
// 302 - Found: რესურსი დროებით იმყოფება სხვა მისამართზე.
// 304 - Not Modified: რესურსი არ შეცვლილა (გამოიყენება ქეშირებისთვის).

// --- 4xx: კლიენტის შეცდომა (Client Error) ---
// 400 - Bad Request: მოთხოვნა არასწორად არის შედგენილი (სინტაქსური შეცდომა).
// 401 - Unauthorized: ავტორიზაციაა საჭირო.
// 403 - Forbidden: წვდომა აკრძალულია (მაშინაც კი, თუ ავტორიზებული ხართ).
// 404 - Not Found: გვერდი ან რესურსი ვერ მოიძებნა.
// 405 - Method Not Allowed: HTTP მეთოდი (მაგ: POST) აკრძალულია ამ ბილიკისთვის.
// 429 - Too Many Requests: მომხმარებელმა ძალიან ბევრი მოთხოვნა გაგზავნა მოკლე დროში.

// --- 5xx: სერვერის შეცდომა (Server Error) ---
// 500 - Internal Server Error: სერვერზე მოხდა გაუთვალისწინებელი შეცდომა.
// 502 - Bad Gateway: სერვერმა, რომელიც მუშაობდა როგორც შუამავალი, მიიღო არასწორი პასუხი.
// 503 - Service Unavailable: სერვერი დროებით მიუწვდომელია (მაგ: გადატვირთვის ან რემონტის გამო).
// 504 - Gateway Timeout: სერვერმა პასუხი დროულად ვერ მიიღო სხვა სერვერისგან.