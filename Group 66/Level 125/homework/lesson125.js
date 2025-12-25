// GET (ინფორმაციის წაკითხვა)
// გამოიყენება სერვერიდან მონაცემების ამოსაღებად. ის არ ცვლის სერვერის მდგომარეობას.

// უსაფრთხოება: ითვლება "უსაფრთხო" მეთოდად, რადგან მხოლოდ კითხულობს მონაცემებს.

// ქეშირება: პასუხის ქეშირება (Cache) შესაძლებელია.

// მონაცემები: პარამეტრები იგზავნება URL-ის საშუალებით (მაგ: site.com/users?id=5).

// 2. POST (შექმნა)
// გამოიყენება სერვერზე ახალი რესურსის შესაქმნელად. მაგალითად, ახალი მომხმარებლის რეგისტრაცია ან პოსტის დაწერა.

// მონაცემები: იგზავნება მოთხოვნის Body და არა URL-ში.

// იდემპოტენტურობა: არ არის იდემპოტენტური. თუ ერთსა და იმავე POST მოთხოვნას 5-ჯერ გააგზავნით, სერვერზე 5 ახალი ჩანაწერი შეიქმნება.

// 3. PUT (სრული განახლება)
// გამოიყენება არსებული რესურსის სრულიად ჩასანაცვლებლად.

// მუშაობის პრინციპი: თქვენ აგზავნით ობიექტის სრულ ვერსიას. თუ რესურსი არ არსებობს, ზოგიერთი სისტემა მას ქმნის.

// იდემპოტენტურობა: არის იდემპოტენტური. ერთი და იმავე PUT მოთხოვნის მრავალჯერ გაგზავნა შედეგს არ ცვლის.

// 4. PATCH (ნაწილობრივი განახლება)
// გამოიყენება რესურსის ნაწილობრივი ცვლილებისთვის.

// განსხვავება PUT-სგან: თუ მომხმარებლის მხოლოდ ელ-ფოსტის შეცვლა გსურთ, PATCH-ით აგზავნით მხოლოდ ახალ მეილს. PUT-ის შემთხვევაში კი მთლიანი მომხმარებლის ობიექტი უნდა გაგზავნოთ.

// 5. DELETE (წაშლა)
// გამოიყენება მითითებული რესურსის წასაშლელად.

// იდემპოტენტურობა: არის იდემპოტენტური. პირველი მოთხოვნა წაშლის რესურსს, მომდევნო მოთხოვნებს კი იგივე შედეგი ექნება (რესურსი აღარ იარსებებს).


const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const usersFile = path.join(__dirname, 'users.json');

function getUsers() {
    return JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
}

function saveUsers(users) {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

    const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    res.setHeader('Content-Type', 'application/json');
    if (pathname === '/delete-user' && req.method === 'DELETE') {
        const { adminEmail, adminPassword, id } = query;

        const users = getUsers();
        const admin = users.find(
        u =>
            u.email === adminEmail &&
            u.password === adminPassword &&
            u.role === 'admin'
        );

        if (!admin) {
        res.statusCode = 403;
        res.end(JSON.stringify({ message: 'Access denied' }));
        return;
        }

        const userIndex = users.findIndex(u => u.id === Number(id));

        if (userIndex === -1) {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'User not found' }));
        return;
        }

        const deletedUser = users.splice(userIndex, 1);
        saveUsers(users);

        res.statusCode = 200;
        res.end(
        JSON.stringify({
            message: 'User deleted successfully',
            deletedUser: deletedUser[0]
        })
        );
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
