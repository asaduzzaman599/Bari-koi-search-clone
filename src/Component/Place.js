import React from 'react';

const Place = ({ place, setPosition }) => {
    const { address, area, city, pType, latitude, longitude } = place
    const addressFirst = address.split(', ')[0];
    const addressRemain = address.substring(addressFirst.length + 1,)

    return (
        <div className='flex items-center gap-4 py-2 px-4 w-full bg-white border-2' onClick={() => setPosition([latitude, longitude])}>
            <div></div>
            <div className='w-full'>
                <p className='text-xl'>{addressFirst}</p>
                <p className='text-xl'>{addressRemain} {area} {city}</p>
                <p className='text-xs'><small>{pType}</small></p>
            </div>
        </div>
    );
};

export default Place;