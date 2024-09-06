import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-pink-300 p-3 rounded-md'>Love Love Kucchu</h1>
    <Card username="Prajwal" />
    <Card username="Prajakta"/>
    <Card username="Prathamesh"/>

    <footer>Made with 💖 for learning react!!</footer>
    </>
  )
  
}

export default App
