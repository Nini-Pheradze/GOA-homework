// მოიძიეთ ინფორმაცია query - ების შესახებ, თქვენი დავალებაა, რომ შეამოწმოთ თუ type უდრის 'admin' - ს დააბრუნეთ შესაბამისი მისალმება მაგალითად 'Hello admin' თუ 'user', 'Hello user', moderator 'Hello moderator' სხვა შემთხვევაში კი დააბრუნეთ მნიშვნელობა 'invalid type', კომენტარების სახით ახსენით თუ რა არის query

const http = require('http');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const type = url.searchParams.get('type');

    if (type === 'admin') {
        res.end('Hello admin');
    } 
    else if (type === 'user') {
        res.end('Hello user');
    } 
    else if (type === 'moderator') {
        res.end('Hello moderator');
    } 
    else {
        res.end('invalid type');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});