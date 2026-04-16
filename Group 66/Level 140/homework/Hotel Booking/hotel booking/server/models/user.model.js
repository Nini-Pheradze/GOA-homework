const fs = require('fs');
const path = require('path');

const USERS_FILE = path.join(__dirname, '../database/users.json');

const getAllUsers = () => {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
};

const saveUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};


module.exports = { getAllUsers, saveUsers };


