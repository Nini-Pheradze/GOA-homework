import User from "./User"

function App() {
  return (
    <div>
      <h1>Props HW</h1>

      <User 
        name={"Nini"}
        age = {15}
        email = {"pheradze@gmail.com"}
      />
    </div>
  ); 
}

export default App
