import React from  "react";
import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa'
const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                {/* Loog */}
                <div className="nav-logo">
                    <span>M</span>
                    <span>H</span>
                    <span>G</span>
                </div>

                {/* nav links */}
                <div className="nav-links">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">skills</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                    </ul>
                </div>

                {/* nav links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="#"><FaFacebookSquare className="facebook" /></a>
                        </li>
                        <li>
                            <a href="#"><FaInstagramSquare className="instagram" /></a>
                        </li>
                        <li>
                            <a href="#"> <FaYoutubeSquare className="youtube" /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
    }

export default Navbar;