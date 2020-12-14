import React from 'react';

import './Container.scss';
import Search from '../Search/Search';

function Container(){
    return(
        <div className="container">
            <div className="container__search">
                <Search />
            </div>
        </div>
    )
}

export default Container;