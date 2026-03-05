const bcrypt = require('bcryptjs');

// 1. bcrypt.hash() - გამოიყენება პაროლის "დასამალად" ბაზაში ჩაწერამდე.
// ის იღებს ჩვეულებრივ ტექსტს (plain text) და აბრუნებს ჰეშირებულ სტრინგს.
const signup = async (password) => {
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // ამის შემდეგ hashedPassword შეინახება ბაზაში
};

// 2. bcrypt.compare() - გამოიყენება ავტორიზაციისას.
// რადგან ჰეშიდან პაროლის ამოკითხვა შეუძლებელია, ეს მეთოდი ადარებს 
// მომხმარებლის მიერ შემოყვანილ ტექსტს და ბაზაში არსებულ ჰეშს.
const login = async (enteredPassword, storedHash) => {
    const isMatch = await bcrypt.compare(enteredPassword, storedHash);
    // აბრუნებს true-ს თუ ემთხვევა, წინააღმდეგ შემთხვევაში false-ს.
};