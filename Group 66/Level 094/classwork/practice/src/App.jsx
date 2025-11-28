import { useState } from "react";
import Products from "./Products";


function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prevValue) => prevValue + 1);
        setCount((prevValue) => prevValue + 1);
    }
        // ამ შემთხვევაში რიცხვი 2-ით იზრდება, რადგან React ფუნქციას prevValue გადაეცემა, იმდენჯერ რამდენჯერაც ის განახლდება.

        // setCount(count + 1);
        // setCount(count + 1); ამ შემთხვევაში მიუხედავად ორჯერ გამოძახებისა რიცხვი 1-ით იზრდება ასინქრონიზაციის დამსახურებით.

    return (
        <section>
            <p>{count}</p>
            <button onClick={handleClick}>+1</button>
            <Products/>
        </section>
    )
}

export default App