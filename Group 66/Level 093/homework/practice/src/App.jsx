import { useState } from 'react';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };



  return (
    <>
      {/* შექმენით ერთი მდგომარეობა სახელად isLightMode რომლის საწყისი მნიშვნელობა იქნება false, შექმენით ერთი ფუნქცია სახელად toggleTheme ამ ფუნქციში უნდა გეწეროთ ისეთი ლოგიკა რომ isLightMode - მდგომარეობის მნიშვნელობა შეცვალოთ, შექმენით ერთი ღილაკი რომელზე დაჭერისას გამოიძახებთ toggleTheme ფუნქციას, თუ isLightMode მნიშვნელობა არის false - ის ტოლი მაშინ საიტის უკანა ფერი გახადეთ შავი, სხვა შემთხვევაში კი თეთრი, მინიშნება (გამოიყენეთ ternary operator, style ატრიბუტი), ამის გარდა კარგად გაიაზრეთ თქვენს მიერ დაწერილი კოდი და ახსენით კომენტარების სახით, შეგიძლიათ მოიძიოთ ინფორმაციაც ამ დავალებასთან დაკავშირებით */}

      <div>
        <button onClick={toggleTheme}>
          {isLightMode ? "Switch to dark" : "Switch to light"}
        </button>

        <h1>{isLightMode ? "Light Mode" : "Dark Mode"}</h1>
      </div>
    </>
  )
}

export default App
