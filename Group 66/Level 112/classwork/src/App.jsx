// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


import React, { useState } from "react";
import { useMemo } from "react";

function PrimeCalculator() {
  const [number, setNumber] = useState(10000); // Input for prime calculation
  const [counter, setCounter] = useState(0);   // Unrelated state

  // Expensive function: calculates all primes up to n
  const calculatePrimes = (n) => {
    console.log("Calculating primes...");
    const primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
    return primes;
  };

  const primes = useMemo(() => calculatePrimes(number), [number]); // avoiding calculating

  return (
    <div>
      <h1>Prime Number Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>
      <p>Counter: {counter}</p>
      <p>Number of primes: {primes.length}</p>
    </div>
  );
}

export default PrimeCalculator;

// export default App
