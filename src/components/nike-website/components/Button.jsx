import React from 'react';

const Button = ({ label, iconURL, colorBg, colorText, borderColor }) => {
    const buttonStyle = {
        backgroundColor: colorBg || 'bg-coral-red',
        color: colorText || 'text-white',
        border: borderColor || 'border-coral-red',
    };

    return (
        <button className={`flex whitespace-nowrap border-2 rounded-full p-3 justify-center leading-none gap-3 ${buttonStyle.backgroundColor} ${buttonStyle.color} ${buttonStyle.border}`}>
            {label} {iconURL && <img src={iconURL} alt="" />}
        </button>
    );
};


export default Button