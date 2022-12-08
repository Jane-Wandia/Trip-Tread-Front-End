import React from 'react'
import './CSS/Footer.css'

import { FaPhoneSquareAlt, FaRegEnvelope,  FaGithubSquare, } from "react-icons/fa";
function Footer () {
    return (
        <div className="footer">
            <div className="section1">
                <h4>Contact Us</h4>
            <p><FaPhoneSquareAlt />
                    +254702233145</p>
                    <p><FaRegEnvelope />
                    info@trip-tread.co.ke &reg;</p>
                    <p><FaGithubSquare/>All rights reserved &trade; inc.</p>
                    <p>CopyRight By TripTread Devs&#169;</p>
            </div>
        </div>
    )
}

export default Footer;