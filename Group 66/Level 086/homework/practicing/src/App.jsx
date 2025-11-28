// function App() {
//   return (
//     // 
//   )
// }

export default App


// მოიძიეთ ინფორმაცია import/export შესახებ, გააკეთეთ 5-5 მაგალითი require და module, დააინტალირეთ გარე მოდულებიც და შემქენით თქვენი მოდულებიც


// JavaScript მოდულები საშუალებას გაძლევთ, კოდი ცალკეულ ფაილებად დაყოთ.

// ეს კოდის ბაზის შენარჩუნებას აადვილებს.

// ES მოდულები  import/export ოპერატორებს ეყრდნობა.


const Header = require("./Header");

import Header from "./Header";


const logo = require("./assets/logo.png");

import logo from "./assets/logo.png";


const data = require("./data/products.json");

import products from "./data/products.json";


const axios = require("axios");

import axios from "axios";


function sum(a, b) {
    return a + b;
}
module.exports = sum;

const sum = require("./utils/math");
console.log(sum(5, 7));


export function sum(a, b) {
    return a + b;
}

export const PI = 3.14;


import { sum, PI } from "./utils/math";

console.log(sum(4, 6), PI);


// მას JSX ეწოდება და JavaScript-ის სინტაქსის გაფართოებაა. იგი React-თან ერთად გამოიყენება, რათა აღვწეროთ, თუ როგორი უნდა იყოს ინტერფეისი. JSX შეიძლება შაბლონის ენას მოგაგონებდეთ, მაგრამ მას JavaScript-ის სრული ძალა აქვს.

// JSX აწარმოებს React-ის „ელემენტებს“.

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;


// React-ი საშუალებას გაძლევთ, შექმნათ მომხმარებლის ინტერფეისები ცალკეული ნაწილებისგან, რომლებსაც კომპონენტები ეწოდებათ. 


// react-dom პაკეტი გთავაზობთ DOM-სპეციფიკურ მეთოდებს, რომელთა გამოყენება შესაძლებელია საჭიროების შემთხვევაში, React მოდელის გარეთ გასასვლელად გამოსავლის სახით.

import * as ReactDOM from 'react-dom';


// A functional component is basically a function that takes an object of props and turns it into JSX
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}



// createRoot(container[, options]);

// createRoot() აკონტროლებს თქვენს მიერ გადაცემული კონტეინერის კვანძის შინაარსს. რენდერის გამოძახებისას შიგნით არსებული ნებისმიერი DOM ელემენტი იცვლება. შემდგომი გამოძახებები ეფექტური განახლებებისთვის იყენებს React-ის DOM დიფერენციაციის ალგორითმს.

// createRoot() არ ცვლის კონტეინერის კვანძს (მხოლოდ ცვლის კონტეინერის შვილებს). შესაძლოა, არსებულ DOM კვანძში კომპონენტის ჩასმა არსებული შვილების გადაწერის გარეშე იყოს შესაძლებელი.

// სერვერის მიერ რენდერირებული კონტეინერის ჰიდრატაციისთვის createRoot()-ის გამოყენება არ არის მხარდაჭერილი. ამის ნაცვლად გამოიყენეთ hydrateRoot().

const root = createRoot(container);
root.render(element);



// React JS-ში რენდერინგი კლასის კომპონენტების ფუნდამენტური ნაწილია. ის გამოიყენება კომპონენტის HTML ან JSX კომპონენტების სახით ინტერფეისზე საჩვენებლად. ReactDOM.render() ფუნქცია იღებს ორ არგუმენტს, HTML კოდს და HTML ელემენტს.

import { render } from 'react-dom';

const domNode = document.getElementById('root');
render(<App />, domNode);