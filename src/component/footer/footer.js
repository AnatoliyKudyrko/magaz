import React from 'react';
import './footer.css';
import {Logo} from "../header/menu/menu";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <span>© Classic Family Restaurant</span>
                <span>{Logo()}</span>
                <span>Made with delight by harmuder</span>
            </div>
        </div>
    );
};

export default Footer;