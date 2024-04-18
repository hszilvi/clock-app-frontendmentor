import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuotesDisplay() {
    const [quote, setQuote] = useState([]);
    const [author, setAuthor] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchQuote() {
            try {
                    const apiUrl = `https://api.quotable.io/random`;
                    const response = await axios.get(apiUrl);
                    setQuote(response.data.content);
                    setAuthor(response.data.author)
                    // setAuthor(response.data.author);
                    console.log(response.data.content)
                    console.log(response.data.author)
                } catch (error) {
                    setError('Error getting qoute ' + error.message);
                }

        }
        fetchQuote();
    }, []);
    return (
        <>
        <div>
            {error && <div>{error}</div>}
            <p>{quote}</p>
            <p>{author}</p>

        </div>

        
        </>
    )
}
export default QuotesDisplay;