import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './features/auth/Login';
import Public from './components/Public';
import RequireAuth from './features/auth/RequireAuth';
import Layout from './components/Layout';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path='welcome' element={<Welcome />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App
