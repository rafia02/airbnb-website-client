import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LuFilter } from "react-icons/lu";
import { context } from '../../Context/AuthContex';

const Catagories = () => {

    const { setHotel } = useContext(context)

    const { data: catagories = [], refetch } = useQuery({
        queryKey: ['catagories'],
        queryFn: async () => {
            const res = await fetch('https://sr-bnb-hotel-booking-server.vercel.app/catagories2')
            const data = await res.json()
            return data
        }
    })


    const handleCatagory = (id) => {
        console.log(id)

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
            items: 2
        }
    };

    return (
        <div className='flex m-5'>
            <div className='w-8/12  md:w-4/5'>
                <Carousel responsive={responsive}>

                    {
                        catagories.map(e => <button className='focus:border-b-2 focus:border-gray-700 pb-2' onClick={() => handleCatagory(e.catagory)} key={e.catagory}> <div>
                            <img className='h-8 ' src={e.img} alt="" />
                            <p className='text-start text-sm pt-1'>{e.catagory}</p>
                        </div></button>)
                    }


                </Carousel>
            </div>

            <div className='w-4/12 md:w-1/5 flex justify-end md:justify-between items-center  '>
                <button  onClick={() => document.getElementById('my_modal_2').showModal()} className='flex  gap-2 items-center border border-gray-400 p-2 md:py-3 md:px-4 rounded-xl'>
                    <LuFilter></LuFilter>
                    {/* <button className="btn" >open modal</button> */}
                    <p className='text-sm font-semibold'>Filters</p>
                </button>
                <button className='md:flex hidden gap-2 items-center border px-4 py-3 border-gray-400 rounded-xl'>
                    <p className='text-sm font-semibold'>Total tax</p>
                    <input type="checkbox" className="toggle toggle-sm" />
                </button>
            </div>
        </div>
    )
}

export default Catagories