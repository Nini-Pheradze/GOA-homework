// Find today’s date number (the day of the month).

const birthday1 = new Date("August 19, 1975 23:15:30");

const day = birthday1.getDate();

console.log(day);

// Find the date number of your birthday this year.

let birthdayMonth = 5;
let birthdayDay = 8;

let year = new Date().getFullYear();

let birthday = new Date(year, birthdayMonth, birthdayDay);

let startOfYear0 = new Date(year, 0, 1);

let dayNUmber = Math.floor(birthday - startOfYear0) / (1000 * 60 * 60 * 24) + 1;

console.log("Your birthday is on ", dayNUmber);

// Check if today’s date number is 1.

let today = new Date();

let startOfYear1 = new Date(today.getFullYear(), 0, 1);

let dayNumber1 = Math.floor((today - startOfYear1) / (1000 * 60 * 60 * 24)) + 1;

if (dayNumber1 === 1) {
    console.log("Today is the first day of the year!");
} else {
    console.log("Today is ", dayNumber1);
}


// Find the current year.

let currentYear = new Date("July 20, 25 00:20:18");

console.log(currentYear.getFullYear());

// Find the year of your birthday.

let myBirthday = new Date("June 08, 10 00:05:30");

console.log(myBirthday.getFullYear());

// Check if today is in the year 2025.

let year1 = new Date();

if(year1.getFullYear() === 2025) {
    console.log("Today is in the year 2025!");
} else{
    console.log("Today is not in the year 2025. Current year:", year1.getFullYear());
}


// Find today’s weekday number.

let weekDay = new Date();

let numweekDay = weekDay.getDay();

console.log(numweekDay);

// Find the weekday number of your birthday this year.

let birthWeekDay = new Date("June 08, 10 00:05:30");

let birth = birthWeekDay.getDay();

console.log(birth);

// Check if today is Sunday.

let today1 = new Date();

if (today1.getDay() === "Sunday") {
    console.log("It is sunday");
} else {
    console.log("Today is not sunday,");
};

// Find the current hour right now.

let currentHour = new Date();

let hour0 = currentHour.getHours();

console.log(hour0);

// Find the hour of a given date and time.

let given = new Date("June 08, 10 00:05:30");

let hour1 = given.getHours();

console.log(hour1);

// Check if the current hour is morning (before 12).

let Hour = new Date();

if (Hour.getHours() < 12) {
    console.log("It is morning.");
} else {
    console.log("It is not morning.")
}

// Find the current minute right now.

let minute = new Date();

let currentMinute = minute.getMinutes();

console.log(currentMinute);

// Find the minute of a given date and time.

let givenminute = new Date("June 08, 10 00:05:30");

let Minute = givenminute.getMinutes();

console.log(Minute);

// Check if the current minute is exactly 0 (start of the hour).

let minuteZero = new Date();

if (minuteZero.getMinutes() === 0) {
    console.log("Current minute is 0.");
} else{
    console.log("It is not zero.", minuteZero);
};


