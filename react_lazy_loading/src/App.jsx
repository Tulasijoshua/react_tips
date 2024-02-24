import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import ImgProfile from './components/ImgProfile';

function App() {

  return (
    <div className="container">
    <h2 className="mb-3">
      React Image Lazy Load and Image Load Error Example
    </h2>
    <div className="row">
      <div className="col-6">
        <ImgProfile
          style={{ width: 340 }}
          path="https://i.postimg.cc/8CVt73NY/wonderlane-N-As0-VQu7s-unsplash.jpg"
          placeholder="https://i.postimg.cc/8CVt73NY/wonderlane-N-As0-VQu7s-unsplash.jpg"
        />
      </div>
      <div className="col-6">
        <ImgProfile
          style={{ width: 340 }}
          path="https://brokenpath.com/broken.jpg"
          placeholder="https://i.postimg.cc/RZvT9tdr/guerrillabuzz-crypto-pr-Wtol-M5hsj14-unsplash.jpg"
          loadError="https://i.postimg.cc/RZvT9tdr/guerrillabuzz-crypto-pr-Wtol-M5hsj14-unsplash.jpg"
        />
      </div>
    </div>
  </div>
  )
}

export default App
