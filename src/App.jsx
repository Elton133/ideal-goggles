import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomPokemon from './RandomPokemon'
import Greeter from './Greeter'
import RandomGame from './RandomGame'
import Exercise from './Exercise'
import ReactState from './reactState'
import Toggler from './Toggler'
import ColourBox from './ColourBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ColourBox/>
    {/* <Toggler/> */}
    {/* <RandomPokemon /> */}
    {/* <Greeter person="Elton"/> */}
    {/* <RandomGame /> */}
    {/* <RandomPokemon/>   */}
    {/* <Exercise />
    <ReactState/> */}</>
      
      
   )
}

export default App
