import React from 'react';

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const MapComponent = ({ position: newPosition }) => {
    const position = newPosition

    console.log(position?.length > 0 ? position : [23.822754874033443, 90.39335414609593])
    return (
        <div>
            <MapContainer center={position?.length > 0 ? position : [23.822754874033443, 90.39335414609593]} zoom={15} style={{ height: '100vh', width: '100wh' }} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {position?.length > 0 && <Marker style={{}} position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>}
            </MapContainer>
        </div>
    );
};

export default MapComponent;