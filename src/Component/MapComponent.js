import React from 'react';

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import ChangeMapView from './ChangeMapView';

const MapComponent = ({ selectedplace, fullScreen }) => {
    const position = [selectedplace?.latitude, selectedplace?.longitude]

    console.log(selectedplace)
    return (
        <div className='w-full'>
            <MapContainer center={selectedplace ? position : [23.822754874033443, 90.39335414609593]} zoom={15} style={{ height: '100vh' }} className='w-full' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {selectedplace && <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>}
                <ChangeMapView position={selectedplace ? position : [23.822754874033443, 90.39335414609593]} />
            </MapContainer>
        </div>
    );
};

export default MapComponent;