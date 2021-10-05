import React from  "react";
import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa'
const Navbar = () => {
    return (
        <>
            <div className="cover">
                <h1 className="cover-name">Muhammad Hamza</h1>
            </div>
            <nav className="main-nav">
                {/* nav links */}
                <div className="first-left-nav-links left-nav-links nav-links">
                            <a href="#">Home</a>
                </div>

                <div className="second-left-nav-links left-nav-links nav-links">
                            <a href="#">about</a>
                </div>

                {/* Loog */}
                <div className="nav-logo">
                    <div className="logo-circle">
                        <div className="logo-item">
                            <span>M</span>
                            <span>H</span>
                            <span>G</span>
                        </div>
                    </div>
                </div>

                {/* nav links */}
                <div className="first-right-nav-links right-nav-links nav-links">
                            <a href="#">skills</a>
                </div>

                <div className="second-right-nav-links right-nav-links nav-links">
                            <a href="#">contact</a>
                </div>

            </nav>
        </>
    )
    }

export default Navbar;