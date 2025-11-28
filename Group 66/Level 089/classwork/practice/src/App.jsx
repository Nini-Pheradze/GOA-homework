// App კომპონენტში შექმენით მასივი მინიმუმუ 5 სტრინგით (მაგ: თქვენი საუკეთესო მეგობრების სახელებეით), შემდეგ გამოიყენეთ map მეთოდი იმისათვის რომ შექმნათ li თეგები ამ სახელებიტ და დაარეენდერეთ ეკრანზე

function App() {
  const friendNames = ["Elene", "Lali", "Nino", "Tekla", "Ana"];

  return (
    <main>
      <ul>
        {
          friendNames.map((name) => {
            return <li>{name}</li>
          })
        }
      </ul>
    </main>
  )
}

export default App;
