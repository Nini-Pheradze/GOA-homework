function App() {
  const age = 23;
  return (
    //  შექმენით რაიმე კომპონენტი, სადაც გექნებათ ერთი h1 თეგი, შექმენით ერთი ცვლადი სახელად age შეინახეთ მასში რაიმე მნიშვნელობა, JSX - ში <h1></h1> თეგში ternary operator - ის გამოყენებით შეამოწმეთ თუ age ცვლადის მნიშვნელობა მეტია ან ტოლი 18 - ის დააბრუნეთ მნიშვნელობა You are an adult, სხვა შემთხვევაში კი You are not an adult

    <div>
      <h1>{ age >= 18 ? "You are an adult" : "You are not an adult"}</h1>
    <h2>{ age >= 15 && "You ar able!"}</h2>
    </div>

    // 1 დავალების გაკეთება სცადეთ ამჯერად && conditional operator - ის გამოყენებით

    // ასევე კომენტრაების სახით ახსენით თუ როგორ მუშაობს && conditional operator - ი

    // && contidional operator works only when statemnet is true, otherwise nothing will happen
  )
}
export default App
