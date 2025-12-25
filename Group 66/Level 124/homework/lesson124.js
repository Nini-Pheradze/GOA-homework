// შექმენით პროექტი სადაც, მომხმარებელს შეეძლება რეგისტრაციის და ავტორიზაციის გავლა, შეამოწმეთ მოცემული მომხმარებლის ინფორმაცია, თუ მომხმარებელი უკვე არსებობს იგივე email - ით ფაილში, გამოიტანეთ message - 'An email is already registered', როდესაც მომხმარებელი გაივლის ავტორიზაციას და მისი მონაცემები იყო სწორი გამოიტანეთ ამ მომხმარებლის ობიექტი, რომელიც შეინახეთ ფაილში

const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 3000;

// მომხმარებლების წამოღება ფაილიდან
function getUsers() {
    return JSON.parse(fs.readFileSync('users.json', 'utf-8'));
}

function saveUsers(users) {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
    }

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    res.setHeader('Content-Type', 'application/json');

    if (pathname === '/register' && req.method === 'GET') {
        const { email, password, name } = query;

        if (!email || !password || !name) {
            res.end(JSON.stringify({ message: 'Missing fields' }));
            return;
        }

        const users = getUsers();

        const userExists = users.find(user => user.email === email);

        if (userExists) {
        res.end(JSON.stringify({ message: 'An email is already registered' }));
        return;
        }

        const newUser = {
        id: Date.now(),
        name,
        email,
        password
        };

        users.push(newUser);
        saveUsers(users);

        res.end(JSON.stringify({ message: 'Registration successful', user: newUser }));
    }

    else if (pathname === '/login' && req.method === 'GET') {
        const { email, password } = query;

        const users = getUsers();

        const user = users.find(
        user => user.email === email && user.password === password
        );

        if (!user) {
        res.end(JSON.stringify({ message: 'Invalid email or password' }));
        return;
        }

        res.end(JSON.stringify(user));
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
