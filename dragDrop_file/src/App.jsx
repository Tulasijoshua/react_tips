import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DragDropFile from './components/DragDropFile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <DragDropFile />
    </div>
  )
}

export default App
