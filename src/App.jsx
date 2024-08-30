import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomPokemon from './RandomPokemon'
import Greeter from './Greeter'
import RandomGame from './RandomGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RandomPokemon /> */}
      {/* <Greeter person="Elton"/> */}
      <RandomGame />
    </>
  )
}

export default App
