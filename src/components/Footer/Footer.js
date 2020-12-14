import React from 'react';

import "./Footer.scss"

function Footer(){
    let year = new Date().getFullYear();
    
    return(
        <footer className="footer">
            <p className="footer__copyright">Adam Fuentes Development &copy; {year}</p>
        </footer>
    )
}

export default Footer;