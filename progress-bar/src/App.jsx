import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CircleProgressBar from './components/CircleProgressBar'

function App() {
  const [percentage, setPercentage] = useState(35)

  console.log(percentage)

  return (
    <div>
      <CircleProgressBar percentage={percentage} circleWidth="200" />
      <input 
        type="range" 
        min="1" max="100" 
        step="1" 
        value={percentage} 
        className='progressInput'
        onChange={(ev) => setPercentage(ev.target.value)} 
      />
    </div>
  )
}

export default App
