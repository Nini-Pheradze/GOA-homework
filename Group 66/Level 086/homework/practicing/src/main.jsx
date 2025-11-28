import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />);


// გამოიყენეთ React.createElement - იმისათვის რომ თქვენივე ხელით შექმნათ ელემენტები, ახსენით თითოეული ეტაპი კომენტარების სახით,  კარგად გაიაზრეთ შემდეგ სცადეთ იგივე რამის გაკეთება ამჯერად JSX - ის დახმარებით

const title = React.createElement(
    "h1", // element tag
    { id: "main-title" }, // id atribute
    "Hello!" // text of an elemnt
);