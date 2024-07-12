import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SwitchTest from './components/SwitchTest';

function App() {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = () => {
    setSwitchValue(!switchValue);
  };

  return (
    <div>
      <h1>Switch Component Example</h1>
      <div>
        <SwitchTest value={switchValue} onChange={handleSwitchChange} />
        <p>The switch is {switchValue ? 'ON' : 'OFF'}</p>
      </div>
    </div>
  )
}

export default App
