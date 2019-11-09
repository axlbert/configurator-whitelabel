import React from 'react';
import './Button.css';

function Button(props) {
    const { onClick, step } = props;
    return (
        <button className="Button mt-3 mb-3" onClick={() => {onClick({nextStep: step+1})}}>WEITER</button>
    );
}

export default Button;
