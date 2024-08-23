import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div style={{ display: 'inline' }}>
                <nav className="Nav">
                    <Link to="/" onClick={closeMobileMenu}>
                        <img className="logoNav" src={require("./images/logos/Primary Logo/JC Primary Logo_7546C.png")} alt="Logo" />
                    </Link>
                    <div className={`header ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span className="closebtn" onClick={closeMobileMenu}>&times;</span>
                        <Link to="/" onClick={closeMobileMenu}>Home</Link>
                        <Link to="/services" onClick={closeMobileMenu}>Services</Link>
                        <Link to="/resources" onClick={closeMobileMenu}>Resources</Link>
                        <Link to="/Contact" onClick={closeMobileMenu}>Contact</Link>
                    </div>
                    <div className="hamburger" onClick={toggleMobileMenu}>
                        &#9776; {/* Hamburger icon */}
                    </div>
                </nav>
            </div>
                                    {/*
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
                                </div>
                            )
                        </div>&emsp;
                        
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
                                </div>
                            )}
                        </div>&emsp;*/}
        </>
    );
}

export default Header;
