import './App.css';
import Quotes from './components/Quotes/quotes';
import Location from './components/Location/location';
import Data from './components/Data/data';
// import Time from './components/Time/time';
import MoreLessBtn from './components/MoreLessButton/morelessbutton';
import React, { useState } from 'react';
// import moment from 'moment-timezone';
import Time from './components/Time/time';
// import ExpandView from './components/Expand/expand';

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
        <Time moreLess={moreLess} setMoreLess={setMoreLess}/>
        <Location />
        <MoreLessBtn moreLess={moreLess} setMoreLess={setMoreLess} />                 
      </div>
    <Data moreLess={moreLess} setMoreLess={setMoreLess}/>

    {/* <Data/> */}
      </div>


    
    </>
  )
}

export default App;
