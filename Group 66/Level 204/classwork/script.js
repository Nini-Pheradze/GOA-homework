"use strict";
// 1) შექმენი ფუნქცია რომელსაც გაუწერ 2 პარამეტრს ერთი აუცილებელი და მეორე ნებაყოფლობითი აგრეთვე გაუწერე დასაბრუნებელი მნიშვნელობის ტიპი, დამატებით გააკეთე დოკუმენტაცია ფუნქციის ლამაზად და კარგად.
function greetUser(name, role) {
    if (role) {
        return `Hello, ${name}, your role is ${role}.`;
    }
    return `Hello, ${name}!`;
}
;
console.log(greetUser('Nini', 'Admin'));
