import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardSlider from './components/CardSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardSlider />
    </>
  )
}

export default App
