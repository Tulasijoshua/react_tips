import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Background from './components/Background';
import Modal from './components/Modal';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<Background />}>
          <Route path="modal" element={<Modal />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="modal" element={<Modal />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
