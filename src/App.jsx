

import './App.css';
import Quotes from './components/Quotes/quotes';
import Location from './components/Location/location';
import Data from './components/Data/data';

function App() {

  return (
    <>
    <div id="overlay">


      <Quotes/>
      <Location/>
      <Data/>
    </div>
    </>
  )
}

export default App
