const { readFile, writeFile } =  require("../utils/file");

const signup = (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({message: "ALL data is required!" });
    }

    const users = readFile();
    const isExist = users.find(user => user.email === email);

    if(isExist) {
        return res.status(400).json({ message: "User already registered!" });
    } 

    const user = {
        username,
        email,
        password,
        id: Date.now()
    };

    users.push(user);
    writeFile(users);

    res.status(201).send({ message: "User Registered! "});
};

module.exports = { signup };