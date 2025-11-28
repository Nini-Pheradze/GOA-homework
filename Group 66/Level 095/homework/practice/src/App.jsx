import Products from "./Products";

function App() {
  return (
    <>
      {/* 2) თქვენი სიტყვებით ახსენით თუ რა არის useEffect კაუჭი, რაში გამოვიყენებთ ჩვენ მას */}

      {/* useEffect is a React Hook that lets you synchronize a component with an external system. If some of your dependencies are objects or functions defined inside the component, there is a risk that they will cause the Effect to re-run more often than needed. To fix this, remove unnecessary object and function dependencies. You can also extract state updates and non-reactive logic outside of your Effect. */}

      {/* 3) შექმენით ერთი კომპონენტი სახელად Products რომელშიც გამოიყენებთ ორ კაუჭს useEffect, useState. თქვენი დავალებაა რომ https://fakestoreapi.com/products ამ API - ზე გააგზავნეთ მოთხოვნა (მოცემულ API - დან უნდა წამოიღოთ მონაცემები მხოლოდ მაშინ როდესაც კომპონენტი პირველად დარენდერდება), დაბრუნებული პასუხი კი შეინახეთ data მდგომარეობაში რომლის საწყისი მნიშვნელობა იქნება ცარიელი მასივის ტოლი, საბოლოოდ კი მოცემული პროდუქტები გამოიტანეთ ეკრანზე map - მეთოდის გამოყენებით */}

      {/* 4) თქვენი სიტყვებით ახსენით თუ რა არგუმენტები გადაეცემა useEffect კაუჭს, განიხილეთ თითოეული მათგანი */}
      <Products />
    </>
  )
}

export default App
