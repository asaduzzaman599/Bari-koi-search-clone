import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid'
const Place = ({ place, setSelectedplace, setPlaces, bgColor, textColor }) => {
    const { address, area, city, pType } = place
    const addressFirst = address.split(', ')[0];
    const addressRemain = address.substring(addressFirst.length + 1,)

    const handleSelect = () => {
        setSelectedplace(place)
        setPlaces([])
    }

    return (
        <div className={`flex items-center gap-4 py-2 px-4 w-full  border-2 ${bgColor} ${textColor}`} onClick={handleSelect}>
            <div>
                <LocationMarkerIcon className={`${textColor}`} />

            </div>
            <div className='w-full'>
                <p className='text-xl font-semibold'>{addressFirst}</p>
                <p className='text-xl'>{addressRemain} {area}, {city}</p>
                <span className='my-2 inline-block bg-black bg-opacity-30 p-2 rounded text-sm text-white'><small>{pType}</small></span>
            </div>
        </div>
    );
};

export default Place;