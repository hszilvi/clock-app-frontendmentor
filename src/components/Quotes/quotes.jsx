import React, { useEffect, useState } from 'react';
import axios from 'axios';



function QuotesDisplay({ moreLess }) {
    const [quote, setQuote] = useState([]);
    const [author, setAuthor] = useState([]);
    const [error, setError] = useState('');

    async function fetchQuote() {
        try {
                const apiUrl = `https://api.quotable.io/random`;
                const response = await axios.get(apiUrl);
                setQuote(response.data.content);
                setAuthor(response.data.author)
                // console.log(response.data)
            } catch (error) {
                setError('Error getting qoute ' + error.message);
            }
    }

    useEffect(() => {
        fetchQuote();
    }, []);
    const handleQuoteRefresh = () => {
        fetchQuote();
    }
    return (
        <>
        {moreLess && 
        (
            <div className='quote-wrapper'>
            {/* <div>        
                    <button><img id="refresh-button" src="../../assets/desktop/refresh.png" alt=""/></button>

            </div> */}
            <div className='quote-content'>
                {error && <div>{error}</div>}
                <p className='quote-text'>&quot;{quote}&quot;</p>
                <p className='author'>{author}</p>
            </div>
            <svg 
                role="img"
                width="17" 
                height="17" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleQuoteRefresh}
                >
                    <path d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z" fill="#FFF" opacity=".5"/>
            </svg>

        </div>
        )}
        

        
        </>
    )
}
export default QuotesDisplay;