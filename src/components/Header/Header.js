import React from 'react';
import './Header.css';
import images from '../../res/images';

function Header() {
    return (
        <div className="Header">
            <img src={images.categories.hekto_logo} className="Header-logo" alt="logo" />
        </div>
    );
}

export default Header;
