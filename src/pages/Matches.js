import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navigation from '../components/Navigation';

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/yawee%252321669/battle',
            headers: {
                'X-RapidAPI-Key': 'a4be8a83c7mshecc376eb341d10ep182ae1jsnb6ba96a80581',
                'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
            }
        };
    
        axios.request(options)
        .then((response) => {
          setMatches(response.data.matches);
          setSummary(response.data.summary);
        }).catch((error) => {
          console.error(error);
        });
    }, []);

    return (
        <div className='page matches'>
            <Navigation />
            20 last mathes played
        </div>
    );
};

export default Matches;