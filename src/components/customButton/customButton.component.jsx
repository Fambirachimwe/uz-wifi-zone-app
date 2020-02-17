import React from 'react';
import './customButton.styles.scss';




const  CustomButton = ({children}) => (
    <div className="custom-button">
        <button className="custom-btn">
            {children}
        </button>
    </div>
);


export default CustomButton;

