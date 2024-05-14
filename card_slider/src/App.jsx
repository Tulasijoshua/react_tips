import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardSlider from './components/CardSlider'
import ScratchCarousel from './components/ScratchCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CardSlider /> */}
      <ScratchCarousel />
    </>
  )
}

export default App
