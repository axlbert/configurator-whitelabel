import React from 'react';
import './Button.css';

function Button(props) {
    const { onClick, step } = props;
    return (
        <button className="Button" onClick={() => {onClick({nextStep: step+1})}}>WEITER</button>
    );
}

export default Button;
