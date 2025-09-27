// Create a Class for a Teacher

// Make a class named Teacher.

// Add a constructor that takes name and subject.

// Add a method introduce() that prints: // Create a Class for a Teacher

// Add a method introduce() that prints: "Hello, I am NAME and I teach SUBJECT."..

class Teacher {
    constructor (teacher, subject) {
        this.name = teacher;
        this.subject = subject;
    }

    introduce() {
        console.log(`Hello, I am ${this.name} and I teach ${this.subject}.`);
    }
};


const teacher1 = new Teacher("George", "English");

teacher1.introduce();



// Create a Class for a Phone

// Make a class named Phone.

// Add a constructor that takes brand and model.

// Add a method ring() that prints: "The BRAND MODEL is ringing!".


class Phone {
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
    }

    ring() {
        console.log(`The ${this.brand, this.model}  is ringing!`);
    }
}

const phone1 = new Phone("Iphone", "14 Pro Max");

phone1.ring();


// Create a Class for a Movie

// Make a class named Movie.

// Add a constructor that takes title and year.

// Add a method play() that prints: "Now playing: TITLE (YEAR)".


class Movie {
    constructor (title, year) {
        this.year = year;
        this.title = title;
    }

    play() {
        console.log(`Now playing: ${this.year, (this.title)}`);
    }
}

const movie1 = new Movie ("The Matrix", 1999);

movie1.play();


// Create a Class for a Cat

// Make a class named Cat.

// Add a constructor that takes name and color.

// Add a method meow() that prints: "NAME the COLOR cat says Meow!".

class Cat {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    }

    meow() {
        console.log(`${this.name} the ${this.color} cat says Meow!`);
    }
}

const cat1 = new Cat ("Rose", "brown");

cat1.meow();


// Create a Class for a Bank Card

// Make a class named BankCard.

// Add a constructor that takes cardNumber and balance.

// Add a method withdraw(amount) that decreases the balance and prints the new balance.


class BankCard {
    constructor (cardNumber, balance) {
        this.cardNumber = cardNumber;
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        } else {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance: ${this.balance}`);
        }
    }
}

const myCard = new BankCard("1234-5678-9876-5432", 500);
myCard.withdraw(200); 
myCard.withdraw(400); 