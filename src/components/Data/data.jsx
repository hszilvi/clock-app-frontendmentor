import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from"moment";
// import Moment from 'react-moment';

function TimeDisplay() {
    const [time, setTime] = useState('');
    const [abb, setAbb] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [dayOfYear, setDayOfYear] = useState('');
    const [numberOfWeek, setNumberOfWeek] = useState('');
    const [error, setError] = useState('');
    const [hours, setHours] = useState('');
    const [greating, setGreating] = useState('');


    useEffect(() => {
        async function fetchTime() {
            try {
                    const apiUrl = `http://worldtimeapi.org/api/timezone/Europe/London`;
                    const response = await axios.get(apiUrl);
                    setTime(response.data.datetime)
                    setAbb(response.data.abbreviation);
                    setDayOfWeek(response.data.day_of_week);
                    setDayOfYear(response.data.day_of_year);
                    setNumberOfWeek(response.data.week_number);
                    const updatedTime = response.data.datatime;
                    setHours(moment(updatedTime).format("HH"));
                    // console.log(response.data)
                } catch (error) {
                    setError('Error getting qoute ' + error.message);
                }

        }
        fetchTime();
    }, []);

    // const checkDayTime = () => {

    //     if (hours < 12) {
    //         setGreating("Good Morning");
    //     } else if ( 12 <= hours < 18 ) {
    //     setGreating("Good Afternoon");
    //     } else {
    //         setGreating("Good Evening");
    //     }
    
    
    
    //     console.log(hours);
    // }
    
    



 
    
    // checkDayTime();

    return (
        <>
        <div>
            {error && <div>{error}</div>}
            {/* <div>{time}</div> */}
            <div>{moment(time).format("HH:MM")}</div>
            <div>{greating}</div>

            <p>{abb}</p>
            <p>Day of the year {dayOfYear}</p>
            <p>Day of the week {dayOfWeek}</p>
            <p>Week number {numberOfWeek}</p>

        </div>

        
        </>
    )
}
export default TimeDisplay;