// შექმენით პროექტი სადაც, მომხმარებელს შეეძლება რეგისტრაციის და ავტორიზაციის გავლა, შეამოწმეთ მოცემული მომხმარებლის ინფორმაცია, თუ მომხმარებელი უკვე არსებობს იგივე email - ით ფაილში, გამოიტანეთ message - 'An email is already registered', როდესაც მომხმარებელი გაივლის ავტორიზაციას და მისი მონაცემები იყო სწორი გამოიტანეთ ამ მომხმარებლის ობიექტი, რომელიც შეინახეთ ფაილში
const http = require('http');
const fs = require('fs');

const getUsers = () => {
    const data = fs.readFileSync('./users.json', 'utf-8');
    return JSON.parse(data).users;
};

const saveUsers = (users) => {
    fs.writeFileSync('./users.json', JSON.stringify({ users }, null, 2));
};

const readBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => body += chunk.toString());
        req.on('end', () => {
            try { resolve(JSON.parse(body)); } 
            catch (e) { reject(e); }
        });
    });
};

const server = http.createServer(async (req, res) => {
    const { method, url } = req;
    const users = getUsers();

    if (method === 'POST' && url === '/register') {
        try {
            const userData = await readBody(req);
            const userExists = users.find(u => u.email === userData.email);
            
            if (userExists) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: 'An email is already registered' }));
            }

            const newUser = {
                id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
                ...userData
            };

            users.push(newUser);
            saveUsers(users);

            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User registered successfully', userId: newUser.id }));
        } catch (err) {
            res.writeHead(400);
            res.end("Invalid data");
        }
    }

    else if (method === 'POST' && url === '/login') {
        try {
            const loginData = await readBody(req);
            const user = users.find(u => u.email === loginData.email && u.password === loginData.password);

            if (user) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(user));
            } else {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid email or password' }));
            }
        } catch (err) {
            res.writeHead(400);
            res.end("Invalid data");
        }
    } 
    else {
        res.writeHead(404);
        res.end("Route not found");
    }
});

server.listen(3000, () => console.log('Auth server running on port 3000'));
