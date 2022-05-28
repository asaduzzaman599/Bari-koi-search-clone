import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid'
const Place = ({ place, setSelectedplace }) => {
    const { address, area, city, pType } = place
    const addressFirst = address.split(', ')[0];
    const addressRemain = address.substring(addressFirst.length + 1,)

    return (
        <div className='flex items-center gap-4 py-2 px-4 w-full bg-white border-2' onClick={() => setSelectedplace(place)}>
            <div>
                <LocationMarkerIcon className="h-8 w-8 text-black" />

            </div>
            <div className='w-full'>
                <p className='text-xl'>{addressFirst}</p>
                <p className='text-xl'>{addressRemain} {area} {city}</p>
                <span className='my-2 inline-block bg-black bg-opacity-30 p-2 rounded text-sm text-white'><small>{pType}</small></span>
            </div>
        </div>
    );
};

export default Place;