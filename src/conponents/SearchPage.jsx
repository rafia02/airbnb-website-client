import React, { useContext, useEffect, useReducer, useState } from 'react'
import { context } from '../Context/AuthContex'
import SingleHotel from './Home/SingleHotel'
import Spinner from './Shared/Spinner';
import { useLoaderData } from 'react-router-dom';

const SearchPage = () => {
  
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    // const [data, setData] = useState([])
    const [loading, setLoadign] = useState(true)
const data = useLoaderData()
    const {  total, country } = useContext(context)

    console.log(total, country)

    if(!total && !country){
        <Spinner></Spinner>
    }

    // useEffect(() => {
    //     fetch("https://room-booking-server.vercel.app/hotels")
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //             setLoadign(false)
    //             forceUpdate()
    //         })
    //         .catch(e => console.error(e))
    // }, [])


    const filterData = data?.filter(d => d.room.guest >= total && country === d.pleace.country)

    console.log(filterData)

 





  return (
    <div>

    {
        filterData.length ? 
        <div className='mx-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-14 my-16'>
        {
            filterData.map(htl => <SingleHotel
                key={htl._id}
                htl={htl}
            ></SingleHotel>)
        }
    </div>
    :
    <h4 className='text-2xl md:text-4xl text-center mt-10 font-bold '>No Found Any Hotel In This Place</h4>
    }
    
</div>
  )
}

export default SearchPage