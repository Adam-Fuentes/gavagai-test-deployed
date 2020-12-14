import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import './WordDetail.scss';
import * as Constants from '../../constants/constants';
import Loading from '../Loading/Loading';

function WordDetail(){
    const { lang, word } = useParams();
    const [loading, setLoading] = useState(true);
    const [wordInfo, setWord] = useState(null)
 
    useEffect(() => {
        if(wordInfo === null) {
            fetch(Constants.API_URL+lang+"/"+word+"?apiKey="+Constants.API_KEY)
            .then(response => response.json())
            .then(wordData => {
                //console.log(wordData.wordInformation);
                setWord(wordData.wordInformation);
                setLoading(false)            
            })
        }        
      });

    if (loading) return <Loading/>

    return(

        <div className="wordDetail">
            <h4 className="wordDetail__heading">{wordInfo.word}</h4>
            <div className="wordDetail__details">
                <p className="wordDetail__text">frequency: {wordInfo.frequency}</p>
                <p className="wordDetail__text">document frequency: {wordInfo.documentFrequency}</p>
                <p className="wordDetail__text">absoluterank: {wordInfo.absoluteRank}</p>
            </div>
        </div>
    )
}

export default WordDetail;