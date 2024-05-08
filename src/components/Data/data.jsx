import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TimeDisplay({ moreLess }) {
    // const [abb, setAbb] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [dayOfYear, setDayOfYear] = useState('');
    const [numberOfWeek, setNumberOfWeek] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchTime() {
            try {
                    const apiUrl = `http://worldtimeapi.org/api/timezone/Europe/London`;
                    const response = await axios.get(apiUrl);
                    // setAbb(response.data.abbreviation);
                    setDayOfWeek(response.data.day_of_week);
                    setDayOfYear(response.data.day_of_year);
                    setNumberOfWeek(response.data.week_number);
                    setTimeZone(response.data.timezone);
                    console.log(response.data)
                } catch (error) {
                    setError('Error getting data ' + error.message);
                }
        }
        fetchTime();
    }, []);
    return (
        <>
        {!moreLess && (
            <div className='expand-content'>
                {error && <div>{error}</div>}

                {/* <p>{abb}</p> */}
                <p>Current Timezone {timeZone}</p>
                <p>Day of the year {dayOfYear}</p>
                <p>Day of the week {dayOfWeek}</p>
                <p>Week number {numberOfWeek}</p>
            </div>         
        )} 
        </>
    )
}
export default TimeDisplay;