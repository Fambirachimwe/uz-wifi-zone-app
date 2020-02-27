import React from 'react';
import './homepage.styles.scss';
import Map from './map.component';

const Homepage = () => {



    return (
        <div className="homepage">

            <div className="header-box">
                {/* the header section */}
                <div className="menu"> <i className="material-icons">menu</i> </div>
                <div className="search"><i className="material-icons">search</i></div>

            </div>

            <div className="map">

                <Map />

            </div>



            
        </div>
    )
}




export default Homepage;


