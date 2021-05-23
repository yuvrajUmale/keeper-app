import React from 'react';

const CurrentYear = new Date().getFullYear();
const myName = 'Yuvraj Umale';


function Footer(){
    return(
        <div>
            <footer>
                <p>{myName} ⓒ {CurrentYear}</p>
            </footer>            
            
        </div>
    );
}

export default Footer;