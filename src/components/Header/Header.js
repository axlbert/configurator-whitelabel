import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Header.css';
import images from '../../res/images';

class Header extends Component {
    render () {
        return (
            <div className="Header" onClick={() => this.props.history.push('/home')}>
                <img src={images.categories.hekto_logo} className="Header-logo" alt="logo" />
            </div>
        );
    }
    
}

export default withRouter(Header);
