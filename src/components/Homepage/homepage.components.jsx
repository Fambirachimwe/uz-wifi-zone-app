import React from 'react';
import './homepage.styles.scss';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'



const Map = () => (
    <GoogleMap 
        defaultZoom={10}
        defaultCenter={{lat: 38.041930, lng:-78.520730 }}
    >

        <Marker position={{lat: 38.041930, lng:-78.520730 }} />

    </GoogleMap>
)


const WrappedMap = withScriptjs(withGoogleMap(Map))


const Homepage = () => (
    <div className="homepage">

        <div className="header-box">
            <div className="menu"> <i class="material-icons">menu</i> </div>
            <div className="search"><i class="material-icons">search</i></div>

        </div>
      
        <div className="map">
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBbpY-CoO1_r16u4qYuImIIdrAQbb77BbA`}
                loadingElement={<div style={{height: '100%'}} />}
                containerElement={<div style={{height: '100%'}} />}
                mapElement={<div style={{height: '100%'}} />}
            />
        </div>

        <div className="card">
            <div className="card-image">
                <img src="https://images.freeimages.com/images/large-previews/c33/library-1482719.jpg" alt="Object image"/>
            </div>
            

            <div className="left">
                <div className="title">
                    <p>UZ Library  <i class="material-icons">location_on</i>  </p>
                    
                </div>

                <div className="description">
                    <p>Distance</p>
                    <button>Open</button>
                </div>
            </div>
            
        </div>
    </div>
);



export default Homepage;


