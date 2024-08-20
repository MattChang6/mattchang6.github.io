import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from '../pages/home';

const Header = () => {
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    return(
        <>
         <div style={{ display: 'inline' }}>
                <nav className="Nav">
                    <Link to="/"><img className="logoNav" src={require("./images/logos/Primary Logo/JC Primary Logo_7546C.png")} alt="Logo" /></Link>
                    <span className="header">
                        <Link to="/">Home</Link>&emsp;

                        <div 
                            className="dropdown"
                            onMouseEnter={() => setShowDropdown1(true)}
                            onMouseLeave={() => setShowDropdown1(false)}
                        >
                            <span className="dropbtn">Dropdown 1</span>
                            {showDropdown1 && (
                                <div className="dropdown-content">
                                    <Link to="/route1">Route 1</Link>
                                    <Link to="/route2">Route 2</Link>
                                    {/* Add more links as needed */}
                                </div>
                            )}
                        </div>&emsp;

                        <Link to="/page1">Page 1</Link>&emsp;

                        <div 
                            className="dropdown"
                            onMouseEnter={() => setShowDropdown2(true)}
                            onMouseLeave={() => setShowDropdown2(false)}
                        >
                            <span className="dropbtn">Dropdown 2</span>
                            {showDropdown2 && (
                                <div className="dropdown-content">
                                    <Link to="/route3">Route 3</Link>
                                    <Link to="/route4">Route 4</Link>
                                    {/* Add more links as needed */}
                                </div>
                            )}
                        </div>&emsp;

                        <Link to="/page2">Page 2</Link>
                    </span>
                </nav>
            </div>

        </>
    )
}

export default Header;