import { useState } from "react";

function App() {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <>
      {/* მოიძიეთ ინფორმაცია useState შესახებ, App კომპონენტში გამოიყენეთ ეს კაუჭი, შექმენით click მდგომარეობა, რომლის საწყისი მნიშვნელობა იქნება 0, როდესაც ღილეკაზე მოხდება დაწკაბება შეცვლაეთ მდგომარეობა (ანუ ერთით დააპლიუსეთ) */}

      {/* React useState Hook საშუალებას გვაძლევს, თვალყური ადევნოთ მდგომარეობას ფუნქციის კომპონენტში.

      State ზოგადად ეხება მონაცემებს ან თვისებებს, რომელთა თვალყურის დევნებაც საჭიროა აპლიკაციაში. */}

      <h1>Click count: {click}</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
