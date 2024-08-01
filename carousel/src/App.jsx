import './App.css'
import Carousel from './components/Carousel'
import {slides} from "./data/carouselData.json";

function App() {

  return (
    <>
      <Carousel data={slides} />
    </>
  )
}

export default App
