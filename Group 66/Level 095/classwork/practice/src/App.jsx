import { use, useState } from "react"

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const handleNameChange = ({ target } ) => {
    const { value } = target;

    setName(value);
  };

  const handleLastnameChange = ({ target }) => {
    const { value } = target;

    setLastname(value);
  }

  const [formState, setFromState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFromState(prev => ({
      ...prev,
      [name]: value,
    }));

    console.log(formState);
  };

  return (
    <>
      {/* შექმენით form ორი input_ით, name და lastname იგივე სახელებით შექმენით მდგომარეობები და მოვლენის მმართველი ფუნქციები handleNameChange მაგალითისთის ეს მოვლენის მართველი ეკუთვნის name ინფუთს როგორც კი მოხდება ცვლილება ინფუთში ეგრევე შეცვლაეთ შესაბამისი მდგომარეობა და პარაგრაფის სახით გამოიტანეთ საიტზე, იგივე უნდა გააკეთოთ lastname ინფუთს შემთხვევაშიც (აუცილებლად ახსენით კომენტარებით რა პლიუსები და მინუსები აქვს ამ გზით მუშაობას) */}

      <form>
        <input type="text" name="name" placeholder="Name" onChange={handleNameChange}/>
        <input type="text" name="lastname" placeholder="Lastname" onChange={handleLastnameChange}/>

        <p>Name: {name}</p>
        <p>Last Nanme: {lastname}</p>

      </form>

      {/* შექმენით მდგომარეობა სახელად formState, შეინახეთ მასში ცარიელი ობიექტი, როგორც კი მოხდება input ცვლილება ობიექტშ ი ავტომატურად დაამატეთ ახალი კუთვნილება ინფუთის მნიშვნელობით (ახსენით კომენტარებით რატომ არის უკეთესი ეს გზა წინა გზასთან შედარებით) */}


      <form>
        <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
        <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange}/>

        <p>Name: {formState.name}</p>
        <p>Last Nanme: {formState.lastname}</p>

      </form>
    </>
  )
}

export default App
