import React from 'react';
import './accountCreated.styles.scss';
import CustomButton from '../customButton/customButton.component'


const AccountCreated = () => (
    <div className="account-created">
        <h4 className="title">
            Thank you for <span>joining us!</span>
        </h4>

        {/* <button className="account-created-btn">Get started   <i class="material-icons">arrow_forward</i> </button> */}
        <CustomButton> Get started   <i class="material-icons">arrow_forward</i> </CustomButton>
    </div>
);


export default AccountCreated;


