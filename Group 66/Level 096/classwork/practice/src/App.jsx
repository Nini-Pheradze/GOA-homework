import { useEffect, useState } from "react"

function App() {
  // შექმენით count მდგომარეობა საწყის მნიშვნელობად გადაეცით 0, შექმენით ერთი ღილაკი რომელზე დაჭერიას count მნიშვნელობას გაზრდით ერთით, თქვენი დავალებაა რომ ყოველ ჯერზე როდესაც count მდგომარეობა შეიცვლება alert - ის დახმარებით გამოიტანოთ `You clicked ${count} time(s)`
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count > 0) {
      alert(`You clicked ${count} time(s)`);
    }
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      {/*  კომენტარების სახით ახსენით თუ რა არის useEffect - რაში ვიყენებთ ჩვენ მას */}

      {/* useEffect Hook საშუალებას გაძლევთ, თქვენს კომპონენტებში გვერდითი ეფექტები შეასრულოთ.

      გვერდითი ეფექტების რამდენიმე მაგალითია: მონაცემების მოძიება, DOM-ის პირდაპირი განახლება და ტაიმერები.

      useEffect იღებს ორ არგუმენტს. მეორე არგუმენტი არასავალდებულოა. 
      useEffect(<function>, <dependency>)

      useEffect მუშაობს ყველა რენდერზე. ეს ნიშნავს, რომ როდესაც რაოდენობა იცვლება, ხდება რენდერი, რომელიც შემდეგ სხვა ეფექტს იწვევს.

      ეს ის არ არის, რაც ჩვენ გვინდა. გვერდითი ეფექტების გაშვების კონტროლის რამდენიმე გზა არსებობს.

      ჩვენ ყოველთვის უნდა ჩავრთოთ მეორე პარამეტრი, რომელიც მასივს იღებს. ამ მასივში შეგვიძლია დამოკიდებულებების გადაცემა useEffect-ზე.
      */}

      {/* No dependency passed:

      useEffect(() => {
        //Runs on every render
      }); */}

      {/* 2. An empty array:

      useEffect(() => {
        //Runs only on the first render
      }, []); */}

      {/* Props or state values:

        useEffect(() => {
          //Runs on the first render
          //And any time any dependency value changes
        }, [prop, state]); */}
    </>
  )
}

export default App
