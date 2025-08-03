import React from 'react';

const Navbar: React.FC = () => {
    return (
        <header className="navbar">
            <a href="/" className="navbar-brand">Aptitude Prep ✨</a>
            <ul className="nav-links">
                <li><a href="#playlists">Playlists</a></li>
                <li><a href="#articles">Articles</a></li>
                <li><a href="#previous-papers">Previous Papers</a></li>
            </ul>
        </header>
    );
};

export default Navbar;