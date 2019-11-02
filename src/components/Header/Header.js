import React from 'react';
import { NativeLink } from 'react-router-dom';
import group from '../../assets/images/group.png';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <img src={group} className="Header-logo" alt="logo" />
        </div>
    );
}

export default Header;
