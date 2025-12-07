import { useState } from "react"
import Count from "./count";

function App() {
  const [color, setColor] = useState();
  const divStyle = {backgroundColor: color};

  return (
    <>
      <div style={divStyle}>
        <div>
          <p>The color is {color}</p>
          <button onClick={() => setColor('Green')}>Green</button>
        </div>

        <div>
          <p>The color is {color}</p>
          <button onClick={() => setColor('Blue')}>Blue</button>
        </div>

        <div>
          <p>The color is {color}</p>
          <button onClick={() => setColor('Pink')}>Pink</button>
        </div>

        <div>
          <p>The color is {color}</p>
          <button onClick={() => setColor('Red')}>Red</button>
        </div>
      </div>
      <Count />
    </>
  )
}

export default App
