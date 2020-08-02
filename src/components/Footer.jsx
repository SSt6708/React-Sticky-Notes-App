import React from "react";
function Footer(){
    
    const curr_year = new Date();
    
    
    return (
    <footer>
        <p>Copy right {curr_year.getFullYear()}</p>
    </footer>
    );
}


export default Footer;
