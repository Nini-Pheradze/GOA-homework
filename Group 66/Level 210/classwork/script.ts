// 1) შექმენით interface რომელსაც ჩააშენებთ კლასში implements keyword დახმარებით

interface Student {
    identify: (id: number) => void;
}


class Group implements Student {
    identify(id: number) {
        console.log(`I'm ${id.toFixed(2)}.`);
    }
};

const student1 = new Group(); 
student1.identify(5);

// 2) შექმენით ერთმანეთში ჩაშენებული 4 ტიპის ობიექტი დააკვირდით რამდენად რთულია წერაც და წაკითხვაც, შემდეგ დაყავეთ ეს ინტერფეისი სხვადასხვა ინტერფეისებად

interface ComplexOrder {
    orderId: string;
    status: string;
    customer: {
        username: string;
        email: string
        cart: {
            itemsCount: number;
            productDetails: {
                title: string;
                price: number;
                inStock: boolean;
            };
        };
    };
};


const order1: ComplexOrder = {
    orderId: "esdrftg123",
    status: "Delivered",
    customer: {
        username: "Nini",
        email: "Nini@gmail.com",
        cart: {
            itemsCount: 1,
            productDetails: {
                title: "LAptop",
                price: 2500,
                inStock: true
            }
        }
    }
};


// dayofili interfaces
interface Product {
    title: string;
    price: number;
    inStock: boolean;
};

interface Cart {
    itemsCount: number;
    productDetails: Product;
};

interface Customer {
    username: string;
    email: string;
    cart: Cart;
};

interface Order {
    orderId: string;
    status: string;
    customer: Customer;
};

const order2: Order = {
    orderId: "esdrftg123",
    status: "Delivered",
    customer: {
        username: "Nini",
        email: "Nini@gmail.com",
        cart: {
            itemsCount: 1,
            productDetails: {
                title: "LAptop",
                price: 2500,
                inStock: true
            }
        }
    }
};


// 3) შექმენით ერთი ზოგადი interface და შემდეგ კონკრეტული interface რომელსაც გააფართოვებთ ზოგადი interface დახმარებით

interface User {
    id: number;
    username: string;
    email: string;
};

interface PremiumUser extends User {
    subscriptionExpireDate: string;
};

const Customer: PremiumUser = {
    id: 101,
    username: "Lalo",
    email: "lalo@gmail.com",
    subscriptionExpireDate: "2026-12-31",
};


// 4) ახსენით კომენტარებიოთ რა არის implements და extends რეზერვირებული სიტყვები და რაში გვეხმარება ისინი.

// extends გამოიყენება მემკვიდრეობისთვის. მისი დახმარებით ერთი ინტერფეისი აფართოებს მეორე ინტერფეისს.
// მშობელი ინტერფეისიდან ავტომატურად გადმოაქვს ყველა თვისება და მეთოდი.


// implements გამოიყენება მაშინ, როცა კლასს გვინდა მივაბათ ინტერფეისი
// აიძულებს კლასს, რომ აუცილებლად შექმნას ინტერფეისში გაწერილი ყველა ველი და მეთოდი.


// 5) შექმენით რთული ობიექტის 2 ინტერფეისი და გამოიყენეთ მასზე union

interface OnlineLesson {
    title: string;
    duration: number;
    platform: "Zoom" | "Discord";
    onlineDetails: {
        meetingLink: string;
        recorded: boolean;
    };
};

interface InPersonLesson {
    title: string;
    duration: number;
    location: string;
    physicalDetails: {
        roomNumber: number;
        hasProjector: boolean;
    };
};


const lesson1: OnlineLesson = {
    title: "Advanced TypeScript",
    duration: 120,
    platform: "Discord",
    onlineDetails: {
        meetingLink: "https://discord/123456",
        recorded: true
    }
};


const lesson2: InPersonLesson = {
    title: "Advanced TypeScript",
    duration: 60,
    location: "Tbilisi",
    physicalDetails: {
        roomNumber: 300,
        hasProjector: true
    }
}