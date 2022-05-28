import React from 'react';

const PlaceDetail = ({ place, bgColor, textColor }) => {
    const { address, area, city, pType, postCode, uCode } = place
    const addressFirst = address.split(', ')[0];
    const addressRemain = address.substring(addressFirst.length + 1,)
    console.log(place)
    return (
        <div className={`h-full flex flex-col   m-4 opacity-80 ${bgColor} `}>
            <div className={`text-left grid gap-4 ${textColor}`}>
                <h3 className='text-4xl '>{addressFirst}</h3>
                <h3 className='text-2xl'>{addressRemain} {area}, {city}</h3>
                <h3 className='text-xl'>Postcode: {postCode}</h3>
                <p className='text-xl opacity-50'>{pType}</p>
                <p className='text-xl opacity-50'>Place Coe: {uCode}</p>
            </div>
        </div>
    );
};

export default PlaceDetail;