import Nav from "./Nav"
import Header from "./header"

const App = () => {
  return (
    <main>
    <Nav textColor= "red" title="BankHero" bgColor = "wheat"/>

    <Header name= "Nini" age = {15}/>
    </main>
  )
}


export default App

// Props — ეს არის ობიექტი, რომელიც კომპონენტს გარედან,
// მშობელი კომპონენტიდან გადაეცემა. Props-ის საშუალებით
// კომპონენტს ვაძლევთ ინფორმაცასა და მახასიათებლებს.
