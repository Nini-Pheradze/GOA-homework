/*
    Utility ფუნქციები ფაილთან სამუშაოდ
    კითხულობს და წერს users.json ფაილში
    */

    const fs = require("fs");
    const path = require("path");

    const filePath = path.join(__dirname, "../database/users.json");

    const readUsers = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
    };

    const writeUsers = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

module.exports = { readUsers, writeUsers };


/*
    Auth Controller
    აქ ვწერთ რეგისტრაციის ლოგიკას
    */

    const { readUsers, writeUsers } = require("../utils/fileHandler");

    const register = (req, res) => {
    const { username, email, password } = req.body;

    // მონაცემების შემოწმება
    if (!username || !email || !password) {
        return res.status(400).json({
        message: "All fields are required"
        });
    }

    const users = readUsers();

    // email-ის უნიკალურობის შემოწმება
    const exists = users.find((u) => u.email === email);
    if (exists) {
        return res.status(409).json({
        message: "User already exists"
        });
    }

    const newUser = {
        id: Date.now(),
        username,
        email,
        password
    };

    users.push(newUser);
    writeUsers(users);

    res.status(201).json({
        message: "User registered successfully",
        user: newUser
    });
};

module.exports = { register };