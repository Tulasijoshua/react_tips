import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Network from './pages/Network'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Network />
    </>
  )
}

export default App
