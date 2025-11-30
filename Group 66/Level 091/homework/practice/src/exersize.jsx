import ReactDOM from 'react-dom';

function Exersize() {
    // return <h1>Hello World!</h1>;

    // const element = <h2>Welcome!</h2>;

    // ამ კოდში დეკლარილებულია კოდი, იყენებს jsx-ს, იქმენბა ელემენტი

    // jsx არის js გაფართოება, რომელიც საშუალებას გვაძლევს, რომ მომხმარებლის ინტერფეისი შევქმნათ ისევე, როგორც  HTML-ში, მაგრამ ამ შემთხვევაში, js კოდის შიგნით

    const name = "Phera";
    const element = <h3>I am being rendered!</h3>
    const text = "Rendered from a variable!";

    return (
        <>
            <h1>Hello World!</h1>
            <p>Welcome here!</p>
            <button>click me</button>

            <p>Hello {name}!</p>

            <img src="https://static.my.ge/myauto/photos/1/4/7/7/2/large/109277417_1.jpg?v=6" alt="S-CLASS"  width={300}/>

            <div>
                <ul>
                    <li>Apple</li>
                    <li>Banana</li>
                </ul>
            </div>

            {/* ReactDOM.createRoot().render() React root-ს (ფესვს) მოცემულ DOM ელემენტში, რათა შემდგომში ასინქრონულად და ეფექტურად მოხდეს React კომპონენტების ან ელემენტების გამოტანა და მართვა მთელი აპლიკაციის სიცოცხლის განმავლობაში.*/}

            <p>{element}</p>
            <p>{text}</p>

            {/* Virtual DOM (VDOM) არის React-ის შიდა, მსუბუქი ასლი ნამდვილი ბრაუზერის DOM-ისა, რომელიც წარმოდგენილია როგორც JavaScript ობიექტი. როდესაც მონაცემები იცვლება, React ჯერ განაახლებს VDOM-ს და შემდეგ ადარებს ამ ახალ VDOM-ს ძველ ვერსიას (ე.წ. diffing). სწრაფია იმის გამო, რომ ის მხოლოდ მინიმალურ, საჭირო ცვლილებებს განსაზღვრავს და მხოლოდ ამ ცვლილებებს გადასცემს ნამდვილ DOM-ს ერთ პარტიად (batch), რაც თავიდან გვაცილებს ნელი და ძვირადღირებული DOM ოპერაციების არასაჭირო რაოდენობას. */}
        </>
    )
}

export default Exersize