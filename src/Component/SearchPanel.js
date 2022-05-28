import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Place from './Place';

const SearchPanel = ({ setPosition }) => {
    const [places, setPlaces] = useState([])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    useEffect(() => {
        fetch(`https://barikoi.xyz/v1/api/search/autocomplete/${process.env.REACT_APP_API_KEY}/place?q=${watch("location")}`)
            .then(res => res.json())
            .then(data => {
                setPlaces(data.places)
            })
    }, [watch("location")])

    const onSubmit = data => { };

    return (

        <div className='w-full h-screen'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue="" {...register("location")} />


                <input type="submit" />
            </form>

            <div className='w-full h-full overflow-auto'>
                {
                    places?.length > 0 && places?.map(place => <Place place={place}
                        key={place.id}
                        setPosition={setPosition}></Place>)
                }
            </div>
        </div>
    );
}

export default SearchPanel;