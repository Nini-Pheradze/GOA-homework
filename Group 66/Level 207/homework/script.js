"use strict";
// შექმენით type Book, რომელსაც ექნება შემდეგი ველები: title (string), author (string), pages (number) და isAvailable (boolean). შემდეგ შექმენით მინიმუმ 6 წიგნის მასივი ამ ტიპის გამოყენებით. for...of ციკლის მეშვეობით დაბეჭდეთ ყველა წიგნის სათაური, შემდეგ მხოლოდ ხელმისაწვდომი წიგნები (isAvailable === true) და ბოლოს გამოთვალეთ ყველა წიგნის გვერდების საერთო რაოდენობა.
// type Book = {
//     title: string,
//     author: string,
//     pages: number,
//     isAvailable: boolean
// };
// const library: Book[] = [
//     { title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი", pages: 400, isAvailable: true },
//     { title: "დიდოსტატის მარჯვენა", author: "კონსტანტინე გამსახურდია", pages: 350, isAvailable: false },
//     { title: "სამოსელი პირველი", author: "გურამ დოჩანაშვილი", pages: 600, isAvailable: true },
//     { title: "კაცები, რომლებიც ვირთხებს ჰგვანან", author: "დათო ტურაშვილი", pages: 180, isAvailable: true },
//     { title: "ჯინსების თაობა", author: "დათო ტურაშვილი", pages: 210, isAvailable: false },
//     { title: "ყვარყვარე თუთაბერი", author: "პოლიკარპე კაკაბაძე", pages: 120, isAvailable: true }
// ];
// for (const book of library) {
//     console.log(`Book title is ${book.title}`);
// };
// for (const book of library) {
//     if (book.isAvailable === true) {
//         console.log(`Available book is ${book.isAvailable}`);
//     };
// };
// let totalPage = 0;
// for (const book of library) {
//     totalPage += book.pages;
// };
// console.log(`Books total pages quantity is ${totalPage}`);
// შექმენით type Movie, რომელსაც ექნება ველები: title (string), year (number), rating (number) და genre (string). შექმენით მინიმუმ 7 ფილმის მასივი. დაბეჭდეთ მხოლოდ ის ფილმები, რომელთა რეიტინგი 8 ან მეტია, შემდეგ იპოვეთ ყველაზე მაღალი რეიტინგის მქონე ფილმი და დაბეჭდეთ მისი სრული ინფორმაცია.
// type Movie = {
//     title: string, 
//     year: number, 
//     rating: number
//     genre: string
// };
// const movies: Movie[] = [
//     { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
//     { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
//     { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
//     { title: "Parasite", year: 2019, rating: 8.5, genre: "Thriller" },
//     { title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi" },
//     { title: "Shutter Island", year: 2010, rating: 8.2, genre: "Mystery" },
//     { title: "The Hangover", year: 2009, rating: 7.7, genre: "Comedy" }
// ];
// for (const movie of movies) {
//     if (movie.rating > 8.0) {
//         console.log(`Movie whichs rating is more than 8 is ${movie.title}`);
//     };
// };
// let bestMovie: Movie = movies[0]!;
// for (const movie of movies) {
//     if (movie.rating > bestMovie.rating) {
//         bestMovie = movie;
//     }
// }
// console.log(`Best movie is ${bestMovie.title}, produced in ${bestMovie.year}, by ${bestMovie.rating} rating and in ${bestMovie.genre} genre.`);
// შექმენით type User, რომელსაც ექნება ველები: username (string), email (string) და isAdmin (boolean). შემდეგ შექმენით type LoginFunction, რომელიც აღწერს ფუნქციას, იღებს ორ პარამეტრს (username: string, password: string) და აბრუნებს boolean მნიშვნელობას. შექმენით ამ ტიპის ფუნქცია და დააბრუნეთ true, თუ პაროლის სიგრძე მინიმუმ 8 სიმბოლოა, წინააღმდეგ შემთხვევაში false. ბოლოს გამოიძახეთ ფუნქცია რამდენიმე განსხვავებული მონაცემით.
// type User = {
//     username: string, 
//     email: string,
//     isAdmin: boolean
// };
// type LoginFunction = (username: string, password: string) => boolean;
// const login : LoginFunction = (username, password) => {
//     if (password.length >= 8) {
//         return true;
//     }
//     return false;
// };
// console.log(login('Nino', "123546790"));
// შექმენით Generic Type სახელად ApiResponse<T>, რომელსაც ექნება ორი ველი: success (boolean) და data (ტიპი T). შემდეგ შექმენით სამი განსხვავებული ობიექტი: ერთი, სადაც data არის string, მეორე, სადაც data არის number, ხოლო მესამე, სადაც data არის boolean. დაბეჭდეთ სამივე ობიექტი.
// type ApiResponse<T> = {
//     success: boolean,
//     data: T
// };
// const textResponse: ApiResponse<string> = {
//     success: true,
//     data: 'Downloaded successfully!'
// };
// const numberResponse: ApiResponse<number> = {
//     success: true,
//     data: 200
// };
// const booleanResponse: ApiResponse<boolean> = {
//     success: false,
//     data: false
// };
// console.log(textResponse);
// console.log(numberResponse);
// console.log(booleanResponse);
// შექმენით Generic Function სახელად getLastItem<T>, რომელიც მიიღებს ნებისმიერი ტიპის მასივს და დააბრუნებს მის ბოლო ელემენტს. შემდეგ შექმენით სამი განსხვავებული მასივი: რიცხვების, სტრინგების და boolean მნიშვნელობების. გამოიძახეთ ფუნქცია თითოეულ მასივზე და დაბეჭდეთ დაბრუნებული შედეგები.
function getLastItem(array) {
    return array[array.length - 1];
}
;
const numbersArray = [10, 20, 30, 42, 99];
const stringsArray = ["ვაშლი", "ბანანი", "ატამი", "საზამთრო"];
const booleansArray = [true, false, false, true];
console.log(getLastItem(numbersArray));
console.log(getLastItem(stringsArray));
console.log(getLastItem(booleansArray));
