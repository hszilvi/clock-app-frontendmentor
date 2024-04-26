

import './App.css';
import Quotes from './components/Quotes/quotes';
import Location from './components/Location/location';
import Data from './components/Data/data';
// import Time from './components/Time/time';
import MoreLessBtn from './components/MoreLessButton/morelessbutton';
import React, { useState } from 'react';
import moment from 'moment-timezone';

function App() {
  const [moreLess, setMoreLess] = useState(true);

  // const data = {
    // abbreviation: abb,
    // datetime: time,
    // day_of_week: dayOfWeek,
    // day_of_year: dayOfYear,
    // week_number: numberOfWeek

  // };
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  // const timeZone = data.
  console.log(date);


  return (
    <>
    <div id="overlay">
      <div className={hour >= 17 ? "greating-evening" : "greating-morning"}>
        <Quotes moreLess={moreLess}/>
        <p>{hour >= 17 ? "Good Evening," : "Good Morning,"}<span> it&apos;s currently</span></p>
   
        <div className="time-container">
          <div>{hour}:{minutes}</div>
          <Location />

          <MoreLessBtn moreLess={moreLess} setMoreLess={setMoreLess} />
        </div>
      </div>


<Data moreLess={moreLess} setMoreLess={setMoreLess}/>


    </div>
    </>
  )
}

export default App
