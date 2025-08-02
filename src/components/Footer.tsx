import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} JUMCA PC. All rights reserved.</p>
                <p>Contact us: <a href="mailto:jumca.pc@gmail.com">jumca.pc@gmail.com</a></p>
                <p>More Coming Soon!</p>
            </div>
        </footer>
    );
};

export default Footer;
