import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as hotspost from '../../../src/locations.json';
import location from '../../img/location.png'

import './map.styles.scss'

const Map = () => {
    const [selectedMark, setSelectedMark] = useState(null);
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: -17.784210,
        longitude: 31.051390,
        zoom: 10
    });


    return (

        <div>

            <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                mapStyle="mapbox://styles/trizydeboi/ck6m089y60pik1jo604teefd4"
                mapboxApiAccessToken={`pk.eyJ1IjoidHJpenlkZWJvaSIsImEiOiJjazZsenlwOWswaXoxM2pxZzJjOW5hMHNoIn0.ZVvPSN7m0zc1Bd4-lx3MhA`}
            >

                {
                    hotspost.locations.map(loc => (
                        <Marker key={loc.id} latitude={loc.latitude} longitude={loc.longitude}>

                            <button onClick={(e) => {
                                e.preventDefault();
                                setSelectedMark(loc)
                            }}>
                                <img src={location} alt="object" />
                            </button>

                        </Marker>
                    ))
                }

                {
                    selectedMark ? (
                        <Popup latitude={selectedMark.latitude} longitude={selectedMark.longitude} onClose={() => {
                            setSelectedMark(null);
                        }} >

                            <p>{selectedMark.name}</p>

                        </Popup>
                    ) : null
                }


            </ReactMapGL>

            {
                selectedMark ? (
                    <div className="card">
                        <div className="card-image">
                            <img src="https://images.freeimages.com/images/large-previews/c33/library-1482719.jpg" alt="Object" />
                        </div>

                        <div className="left">
                            <div className="title">                           
                                <p>{selectedMark.name}  <i className="material-icons">location_on</i>  </p>
                            </div>

                            <div className="description">
                                <p>Distance</p>
                                <button>Open</button>
                            </div>
                        </div>

                    </div>

                ) : null

            }

        </div>
    )


}

export default Map;