

import './App.css';
import Quotes from './components/Quotes/quotes';
import Location from './components/Location/location';
import Data from './components/Data/data';
// import Time from './components/Time/time';
import MoreLessBtn from './components/MoreLessButton/morelessbutton';
import React, { useState } from 'react';
import moment from 'moment-timezone';
import Time from './components/Time/time';

function App() {
  const [moreLess, setMoreLess] = useState(true);
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return (
    <>
    <div className={hour >= 17 ? "display-evening" : "display-morning"} >
      <div className="main-content-container">
        <Quotes moreLess={moreLess}/>
        <Time/>
        {/* <div className="greating-container">
          {}
        <p className='greating'>{hour >= 17 ? "Good Evening" : "Good Morning"}<span>, it&apos;s currently</span></p>
        </div>

        <div className="time-container">
          <div className="time-content">{hour}:{minutes}</div> */}
          <Location />

          <MoreLessBtn moreLess={moreLess} setMoreLess={setMoreLess} />
        </div>
      </div>
    {/* </div> */}
    <Data moreLess={moreLess} setMoreLess={setMoreLess}/>

    {/* <div id="overlay"></div> */}

    
    </>
  )
}

export default App
