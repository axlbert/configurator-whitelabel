import React from 'react';
import './Button.css';

function Button(props) {
    const { onClick } = props;
    return (
        <button className="Button mt-5 mb-5" onClick={() => {onClick({nextStep: 6})}}>WEITER</button>
    );
}

export default Button;
