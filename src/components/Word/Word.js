import React from 'react';
import { useHistory } from "react-router-dom";

import './Word.scss';

function Word(props){
    let history = useHistory();

    function handleClick() {
        console.log("word: "+ props.word);
        console.log("language: "+ props.language);
        history.push("/worddetail/"+props.language+"/"+props.word);
    }

    return(
        <div className="word">
            <h4 className="word__text" onClick={handleClick}>{props.word}</h4>
        </div>
    )
}

export default Word;