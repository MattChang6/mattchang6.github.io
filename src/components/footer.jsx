import React from "react";
import { Link } from "react-router-dom";
import '../components/contactForm.css';
import './footer.css';

const Footer = () => {
    return (
        <div className="box">
            <div className="footer-container">
                <div className="row">
                <div className="column col1">
                    <Link to="/"> <img className="footer-logo" src={require('../components/images/logos/Primary Logo/JC Primary Logo_white.png')} alt="jc logo"></img></Link>
                    <p className="footer-info">PO Box 7144<br />Porter Ranch, CA 91327</p>
                    <p className="footer-info"><strong>Phone: </strong>818-851-8107</p>
                    <p className="footer-info"><strong>Fax: </strong>747-202-1979</p>
                </div>
                <div className="column link-768">
                    <p className="heading">Links</p>
                    <a className="footer-link" href="/#/">
                        Home
                    </a>
                    <a className="footer-link" href="#/services">
                        Services
                    </a>
                    <a className="footer-link" href="#/resources">
                        Resources
                    </a>
                    <a className="footer-link" href="#/contact">
                        Contact
                    </a>
                </div>
                <div className="column upload-768">
                    <p className="heading">Upload Documents</p>
                    <a className="footer-link" href="https://verifyle.com/@jaychangcpa" target="_blank" rel="noreferrer">
                        Verifyle
                    </a>
                    </div>
                </div>
            </div>
            <h4 className="copyright">&#169;2025 Jay Chang & Associates</h4>
        </div>
    );
};

export default Footer;
