import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Students from ".Students/Students"
import Counter from './Counter';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Students/> */}
    <Counter initialCount={89}/>
   
  </React.StrictMode>,
); 
