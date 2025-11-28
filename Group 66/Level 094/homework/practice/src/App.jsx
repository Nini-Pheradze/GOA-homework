import { useState } from "react"

function App() {
  // შექმენით ერთი მდგომარეობა შეინახეთ მასში ხილისგან შემდგარი მასივი, ღილაკზე დაჭერისას უნდა მოხდეს orange ხილის დამატება, უნდა გქონდეთ მეორე ღილაკი რომელიც ამ მასივს მთლიანად გაასუფთავებს, გამოიტანეთ შედეგი ეკრანზე/

  // შექმენით მდგომარეობა საწყის მნიშვნელობად შეინახეთ მომხმარებლის ობიექტი {name: Your name, password: '123'}, ღილაკზე დაჭერისას
  // უნდა შეცვალოთ name კუთვნილება (ჩაანაცვლეთ თქვენთვის სასურველი სახელით), უნდა გქონდეთ მეორე ღილაკი რომელზე დაჭერისას ობიექტი უნდა დაუბრუნდეს თავის პირვანდელ მნიშვნელობას

  const User = {name: 'Your name', password: '123'};

  const [user, setUser] = useState(User);

  const [fruit, setFruit] = useState(['apple, banana']);

  const changeName = () => {
    setUser({
      ...user,          
      name: "New Name" 
    });
  };

  const resetUser = () => {
    setUser(User);
  };


    const handleClick = () => {
      setFruit([...fruit, 'orange']);
    }

    const clearFruit = () => {
      setFruit([]);
    };

  return (
    <>
      <button onClick={handleClick}>Add Orange</button>
      <button onClick={clearFruit}>Clear Fruit</button>

      <ul>
        {fruit.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h2>User Info</h2>

      <p>Name: {user.name}</p>
      <p>Password: {user.password}</p>

      <button onClick={changeName}>Change Name</button>
      <button onClick={resetUser}>Reset User</button>
    </>
  )
}

export default App
