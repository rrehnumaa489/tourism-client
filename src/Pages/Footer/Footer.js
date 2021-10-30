import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            <div className="mt-5 footer-container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Feature Links</h3>
                        <ul>
                            <li className="footer-item">Scholarship</li>
                            <li className="footer-item">Instructor Registration</li>
                            <li className="footer-item">Student Instractor</li>
                        </ul>

                    </div>
                    <div className="col-md-4">
                        <h3>Support</h3>
                        <ul>
                            <li className="footer-item">Support</li>
                            <li className="footer-item">Privacy</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <ul>
                            <li className="footer-item">Address: Agrabad Chittagong</li>
                            <li className="footer-item">Email: abc@dfger.com</li>
                            <li className="footer-item">Phone: +88123456789</li>

                        </ul>
                    </div>
                </div>
                <div className="lower-footer">
                    <p>copyright@All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;