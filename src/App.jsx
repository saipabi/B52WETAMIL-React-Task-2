import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from "./Counter";
import Boxes from './Boxes'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{border:"2px solid blue",}}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <Boxes subtitle="$40.00-$80.00" 
      subtitle1="$18.00" 
      subtitle2="$25.00" 
      subtitle3 ="$40.00"></Boxes>
      {/* <Counter/> */}
    </>
  )
};

export default App
