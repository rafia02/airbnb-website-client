import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { BsPeople, BsSignNoParking } from "react-icons/bs";
import { LiaBedSolid } from "react-icons/lia";
import { PiHouseLineBold, PiCoatHanger, PiTelevisionSimpleLight } from "react-icons/pi";
import { MdOutlineBathroom, MdAssuredWorkload, MdOutlineWaterDrop, MdSmokeFree } from "react-icons/md";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { TbToolsKitchen2, TbAirConditioning } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiWashingMachine } from "react-icons/gi";
import { TfiSpray } from "react-icons/tfi";


const HotelDetails = () => {

    const details = useLoaderData()


    const { title, _id, img1, img2, img3, img4, img5, reviews, room, price, description, pleace, distance } = details






    return (
        <div className='mx-6 my-9'>

            <div>
                <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
                <div>
                    <div className='flex mt-3 font-semibold mb-10'>
                        <p className=' font-extrabold mr-1'>★ </p>
                        <span className='mr-5'>{reviews}</span>
                        <span>40 reviews</span>
                        <div className='ml-10'>
                            <span>{pleace.distric}, </span>
                            <span>{pleace.division}, </span>
                            <span>{pleace.country}, </span>
                        </div>
                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <img className='rounded-tl-xl rounded-bl-xl w-full h-[360px]' src={img1} alt="" />

                        <div className='w-full'>
                            <div className='grid grid-cols-2 gap-2 w-full'>
                                <img className='h-44 w-full ' src={img2} alt="" />
                                <img className='h-44 w-full rounded-tr-xl' src={img3} alt="" />
                                <img className='h-44 w-full' src={img4} alt="" />
                                <img className='h-44 w-full rounded-br-xl' src={img5} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HotelDetails