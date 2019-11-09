import React, { Component } from 'react';
import landing_image from '../../../assets/images/landing.png'
import './Landing.css';
export default class Landing extends Component {
    render () {
        return (
            <div onClick={() => this.props.history.push('/home')}>
                <img src={landing_image} className="Landing" alt=""></img>
            </div>
        );
    }
}
