    // გჭირდებათ მნიშვნელობა true-სთვის და მნიშვნელობა false-სთვის
    // გჭირდებათ ლაკონური if/else

    // გსურთ რაღაცის შესრულება მხოლოდ მაშინ, როდესაც პირობა მართალია
    // არ გჭირდებათ "სხვა" გზა
    // ხშირად გამოიყენება React-ში პირობითი რენდერინგისთვის

    // JSX საშუალებას იძლევა მხოლოდ გამოსახულებების ჩასმა, ხოლო if არის statement, რომელიც არაფერს აბრუნებს — ამიტომ JSX-ის ტეგებში ვერ მუშაობს.

    // 3) ბევრი ივარჯიშეთ ternary და && operator - ებზე, მოცემული დავალებების გარდა, თქვენითაც გააკეთეთ ამის შესახებ მაგალითები რადგან უფრო უკეთესად გაიაზროთ
  

function App() {
  const age = 23;
  const logged = true;
  return (
    <div>
      <h1>
        {age >= 18 ? "You are an adult" : "You are not an adult"}
      </h1>

      {age >= 18 && <h2>You are eligible!</h2>} 

      <h4>{ age >= 23 ? "You can start working" : "You can't!" }</h4>
      <h4>{ age >= 18 && "You are an adult!" }</h4>
      <h4>{ logged && false }</h4>
      <h4>{ logged ? "Yes" : "No"}</h4>
    </div>
  );
}

export default App;