// 1) შექმენი ფუნქცია რომელსაც გაუწერ 2 პარამეტრს ერთი აუცილებელი და მეორე ნებაყოფლობითი აგრეთვე გაუწერე დასაბრუნებელი მნიშვნელობის ტიპი, დამატებით გააკეთე დოკუმენტაცია ფუნქციის ლამაზად და კარგად.
/**
 * 
 * @param name 
 * @param role 
 * @returns user greeting
 * @author Nini Peradze
*/


function greetUser(name: string, role?:string):string {
    if(role) {
        return `Hello, ${name}, your role is ${role}.`;
    }
    return `Hello, ${name}!`;
};

console.log(greetUser('Nini', 'Admin'));