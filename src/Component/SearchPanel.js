import { ChevronLeftIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Place from './Place';
import PlaceDetail from './PlaceDetail';
import './toogleButton.css'

const SearchPanel = ({ selectedplace, setSelectedplace, fullScreen, setFullScreen }) => {
    const [places, setPlaces] = useState([])
    const [textColor, setTextColor] = useState("bg-[#ffffff]")
    const [bgColor, setBgColor] = useState("text-[#000000]")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    useEffect(() => {
        fetch(`https://barikoi.xyz/v1/api/search/autocomplete/${process.env.REACT_APP_API_KEY}/place?q=${watch("location")}`)
            .then(res => res.json())
            .then(data => {
                setPlaces(data.places)
            })
    }, [watch("location")])

    const onSubmit = data => { };
    const handleColor = () => {
        if (bgColor === "bg-[#000000]") {
            setBgColor("bg-[#ffffff]")
        } else {
            setBgColor('bg-[#000000]')
        }
        if (textColor === "text-[#ffffff]") {
            setTextColor("text-[#000000]")
        } else {
            setTextColor('text-[#ffffff]')
        }
        console.log('hllo', textColor)
    }
    return (

        <div className={`w-full h-screen pt-6 relative ${bgColor}`}>
            <div className='flex justify-between px-4'>
                <p className={`text-2xl font-bold`}><span className='text-[#4C5976]'>Bari</span><span className='text-[#8BE2B4]'>koi</span></p>
                <div className='mr-6'>
                    <label class="switch">
                        <input type="checkbox" onChange={handleColor} />
                        <span class="slider round "></span>
                    </label></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-4 px-2  flex items-center shadow-2xl rounded relative md:static z-40 md:z-0 bg-white'>

                <input placeholder="Search location." className={` text-xl py-2 px-4 flex-1`} {...register("location")} />

                {places?.length === 0 || !places?.length ? <button type="submit" className='px-6 py-2 my-2 bg-gradient-to-r from-[#3CB7B9] to-[#42DB83]  rounded'> <SearchIcon className="h-5 w-5 text-white" /></button>
                    : <XIcon className="h-5 w-5 mr-4 text-black font-bold" onClick={() => setPlaces([])} />}
            </form>

            <div className='w-full h-full overflow-auto absolute z-20'>
                {
                    places?.length > 0 && places?.map(place => <Place place={place}
                        key={place.id}
                        setSelectedplace={setSelectedplace}
                        setPlaces={setPlaces}
                        bgColor={bgColor}
                        textColor={textColor}></Place>)
                }
            </div>
            <div className='h-full md:relative hidden md:block z-10 mt-20 ml-5' >
                {selectedplace && <PlaceDetail place={selectedplace}
                    bgColor={bgColor}
                    textColor={textColor}></PlaceDetail>}
            </div>
            {fullScreen
                || <ChevronLeftIcon className={`h-8 w-8  absolute top-6 right-2 ${textColor}`} onClick={() => setFullScreen(true)} />}
        </div>
    );
}

export default SearchPanel;