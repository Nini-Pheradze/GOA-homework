// 1) შექმენით Type Guard typeof გამოყენებით ფუნქციაში სადაც პარამეტრის ტიპი Union არის

function userId(id: string | number) {
    if (typeof id === 'string') {
        console.log("User's id is string.");
    } 
    console.log("User's id is string")
};

userId('Hello');
userId(3883);

// 2) შექმენით საკუთარი ობიექტის ტიპი, შემდეგ ფუნქცია რომელსაც პარამეტრად ორი საკუთარი ტიპის აგერთიანებას დაუწერთ და გამოიყენეთ in ოპერატორი
type User =  {
    name: string;
    email: string;
};

type Admin = {
    name: string;
    role: string;
    permissions: string[];
};

function getAccountDetails(account: User | Admin) {
    if ("role" in account) {
        console.log(`Status: Admin (${account.role})`);
        console.log(`Permissions: ${account.permissions}`);
    } else {
        console.log(`Status: User`);
        console.log(`Email: ${account.email}`);
    }
};


// 3) ახსენით კომენატრებით რა განსხვავებაა typeof სა და in შორის

// "typeof" ოპერატორი (პრიმიტიული ტიპებისთვის)

// გამოიყენება JavaScript-ის ძირითადი, პრიმიტიული ტიპების შესამოწმებლად.
// აბრუნებს ტიპის დასახელებას სტრინგის სახით (მაგ: "string", "number", "boolean", "object").


// "in" ოპერატორი (ობიექტებისთვის)
// გამოიყენება ობიექტების შიგნით კონკრეტული თვისების (Property) არსებობის შესამოწმებლად. კარგია TypeScript-ის ობიექტის ტიპების გასარჩევად
