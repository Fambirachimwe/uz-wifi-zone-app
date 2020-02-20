import React from 'react';
import './customButton.styles.scss';




const  CustomButton = ({children, type}) => (
    <div className="custom-button">
        <button className="custom-btn" type={type}>
            {children}
        </button>
    </div>
);


export default CustomButton;

