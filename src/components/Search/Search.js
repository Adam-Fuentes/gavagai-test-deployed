import React, { useState } from 'react';

import './Search.scss';
import Word from '../Word/Word';
import Loading from '../Loading/Loading';
import * as Constants from '../../constants/constants';

function Search(){    
    const [query, setQuery] = useState({
        word: "",
        language: ""
    })

    const [loading, setLoading] = useState(null);
    var [simillarWords, setSimillarWords] = useState([]);

    function handleChange(event){
        const {name, value} = event.target;

        setQuery(prevQuery => {
            return {
                ...prevQuery,
                [name]: value
            }
        })
    }

    function submitQuery(event) {
        event.preventDefault();        
            //console.log(API_URL+query.language+"/"+query.word+"?apiKey="+API_KEY);
            fetch(Constants.API_URL+query.language+"/"+query.word+"?apiKey="+Constants.API_KEY)
            .then(response => response.json())
            .then(simillarWordsData => {
                setLoading(false)
                setSimillarWords(simillarWords = simillarWordsData.stringSimilarWords);
            })
            setLoading(true)            
            //console.log(simillarWords);       
    }

    function createWords(simillarWords) {
        return (
            <Word  
                key={simillarWords.word}
                word={simillarWords.word}
                language={query.language}
            />
        )        
    }
    
    return(
        <div>
            <form action="#" className="search">
                <select 
                    className="search__select" 
                    name="language"
                    onChange={handleChange}
                    value={query.language}>
                    <option value="EN">EN</option>
                    <option value="ES">ES</option>
                    <option value="DE">DE</option>
                    <option value="FR">FR</option>
                    <option value="IT">IT</option>
                </select>
                <input
                    name="word"
                    onChange={handleChange} 
                    value={query.word}
                    type="text" 
                    className="search__input" 
                    placeholder="Search word"                         
                    />
                <button 
                    className="search__button"
                    onClick={submitQuery}>
                    <i className="fas fa-search search__icon"></i>
                </button>
            </form>
            <div>
                <h3>Simillar words</h3>
                {loading ? <Loading/> : simillarWords.map(createWords)}                
            </div>
        </div>
    )
}

export default Search;