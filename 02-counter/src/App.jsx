import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter, setCounter]= useState(0)  

let counteru = 1;

const addValue=()=>{
  console.log("clicked", counter);
  if (counter<20){
  setCounter(counter+1);
  counteru++;
}
};

const removeValue=()=>{
  if (counter>0){
  setCounter(counter-1); 
  counteru--;
  }
}

  return (
    <>
     <h1>Simple Counter Project</h1>
     <h2>Counter value: {counter}</h2>
     <h2>Counteru value: {counteru}</h2>

    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
