import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LocationDisplay() {
    const [ip, setIp] = useState([])
    const [city, setCity] = useState([]);
    const [country, setCountry] = useState([]);
    const [error, setError] = useState('');
    
    
    useEffect(() => {
        async function getIp() {
            try {
                const res = await axios.get(`https://api64.ipify.org?format=json`);
                // console.log(res.data);
                setIp(res.data.ip);
            } catch (err) {
                setError('error getting ip ')
            }
        }
        getIp()
    }, []);



    useEffect(() => {
        async function fetchLocation() {
            try {
                    const apiUrl = `https://api.ipbase.com/v2/info?apikey=ipb_live_N0u0KHsQj7vwEjU5KAX4R1O3IRuz9aGmFil5dQ7C&ip=1.1.1.1`;
                    const response = await axios.get(apiUrl);
                    setCity(response.data.data.location.city.name);
                    setCountry(response.data.data.location.country.ioc)
                    // console.log(response.data.data.location.country.ioc)
                    // console.log(response.data.data.location.city.name)
                } catch (error) {
                    setError('Error getting location ' + error.message);
                }

        }
        fetchLocation();
    }, []);
    return (
        <>
        <div>
            {error && <div>{error}</div>}
            <p>in {city}, {country}</p>
            
        </div>

        
        </>
    )
}
export default LocationDisplay;