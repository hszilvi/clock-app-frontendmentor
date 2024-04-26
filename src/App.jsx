import './App.css';
import Quotes from './components/Quotes/quotes';
// import {location} from './location';
import Data from './components/Data/data';
// import Time from './components/Time/time';
import MoreLessBtn from './components/MoreLessButton/morelessbutton';
import React, { useState } from 'react';
// import moment from 'moment-timezone';
import Time from './components/Time/time';

function App() {
  const [moreLess, setMoreLess] = useState(true);
  // const [timezone, city, country] = location();
  const date = new Date();
  const hour = date.getHours();
  // const minutes = date.getMinutes();
  // const {timezone} = data;
  // console.log(city)

  return (
    <>
    <div className={hour >= 17 ? "display-evening" : "display-morning"} >
      <div className="main-content-container">
        <Quotes moreLess={moreLess}/>
        <Time
        />
    



          <MoreLessBtn moreLess={moreLess} setMoreLess={setMoreLess} />        
          
          </div>
      </div>
    <Data moreLess={moreLess} setMoreLess={setMoreLess}/>


    
    </>
  )
}

export default App;
