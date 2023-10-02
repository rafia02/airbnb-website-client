import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LuFilter } from "react-icons/lu";
import { context } from '../../Context/AuthContex';
// import second from '../../../public/hotels.json'
const Catagories = () => {

    const {setHotel} = useContext(context)

    const { data: catagories = [], refetch } = useQuery({
        queryKey: ['catagories'],
        queryFn: async () => {
            const res = await fetch('../../../public/catagories.json')
            const data = await res.json()
            return data
        }
    })


    const handleCatagory = (id) => {


        fetch(`https://room-booking-server.vercel.app/hotels/${id}`)
        .then(res => res.json())
        .then(data => setHotel(data))
        .catch(e => console.error(e))
    
      }


    //   useEffect((id = "National parks") => {
    //     fetch(`../../../public/hotels.json/${id}`)
    //         .then(res => res.json())
    //         .then(data => setHotel(data))
    //         .catch(e => console.error(e))
    // }, [])


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 9
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    return (
        <div className='flex'>
            <div className='w-4/5'>
                <Carousel responsive={responsive}>

                    {
                        catagories.map(e => <div onClick={() => handleCatagory(e.catagory)} key={e.catagory}> <div>
                            <img className='h-8 ' src={e.img} alt="" />
                            <p className='text-start text-sm pt-1'>{e.catagory}</p>
                        </div></div>)
                    }


                </Carousel>
            </div>

            <div className='w-1/5 flex gap-2 items-center  '>
            <button className='flex  gap-2 items-center border px-5 py-3 rounded-xl'>
                    <LuFilter></LuFilter>
                    <p className='text-sm font-semibold'>Filters</p>
                </button>
                <button className='flex  gap-2 items-center border px-5 py-3 rounded-xl'>
                    <p className='text-sm font-semibold'>Total tax</p>
                    <input type="checkbox" className="toggle toggle-sm" />
                </button>
            </div>
        </div>
    )
}

export default Catagories