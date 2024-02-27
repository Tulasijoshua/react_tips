import { createContext, useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import QrCode from './components/QrCode'

// Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: '',
    color: ''
  });
  const value = {
    inputValue, 
    setInputValue,
  }

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 pb-2'>
      <div className='container mx-auto max-w-4xl bg-white rounded-md shadow'>
        <div className='md:grid md:grid-cols-3'>
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default App
