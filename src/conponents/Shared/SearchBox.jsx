import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FiSearch } from "react-icons/fi";





const SearchBox = () => {
    const [isShowOut, setIsShowOut] = useState(false);
    const [isShowIn, setIsShowIn] = useState(false);
    const [selectedDateIn, setSelectedDateIn] = useState(new Date());
    const [selectedDateOut, setSelectedDateOut] = useState(new Date());
    const [showOut, setShowOut] = useState("")
    const [showIn, setShowIn] = useState("")


    const checkIn = `${selectedDateIn.getDate()} - ${selectedDateIn.getMonth()} - ${selectedDateIn.getFullYear()}`
    const checkOut = `${selectedDateOut.getDate()} - ${selectedDateOut.getMonth()} - ${selectedDateOut.getFullYear()}`
    console.log(checkOut)

    // Function to handle date selection
    const handleDateChangeOut = (date) => {
        setSelectedDateOut(date);
        setShowOut(checkOut)
        setIsShowOut(false)
    };
    const handleDateChangeIn = (date) => {
        setSelectedDateIn(date);
        setShowIn(checkIn)
        setIsShowIn(false)
    };


    return (
        <div className='  w-4/6 mx-auto'>
            <div className='flex border  shadow-sm border-gray-300 opacity-95 rounded-full   bg-opacity-60'>
                <div className='flex flex-col px-7 py-3 rounded-l-full   w-80 '>
                    <label>Where</label>
                    <input type="text" className='outline-none' placeholder='Search destinations' />

                </div>
                <div className='border h-10 my-auto'></div>

                <div onClick={() => setIsShowIn(!isShowIn)} className='flex flex-col px-7 py-3    w-40 '>
                    <label>Check In</label>
                    <input type="text" className='outline-none ' value={showIn} placeholder='Add date' />
                </div>
                <div className='border h-10 my-auto'></div>


                <div onClick={() => setIsShowOut(!isShowOut)} className='flex flex-col px-7 py-3    w-40 '>
                    <label>Check Out</label>
                    <input type="text" className='outline-none' value={showOut} placeholder='Add date' />

                </div>
                <div className='border h-10 my-auto'></div>

                <div className='flex items-center'>
                    <div className='flex flex-col px-7 py-3 rounded-l-full   w-48 '>
                        <label>Who</label>
                        <input type="text" className='outline-none' placeholder='Add guest' />
                    </div>


                    <FiSearch className="text-white w-12 h-12 mr-3 rounded-full p-[14px] font-extrabold text-center   bg-[#FF385C] text-5xl " />


                </div>


            </div>





           

            <div className='mx-auto absolute w-4/6'>
                {
                    isShowOut &&
                    <Calendar className="mt-1 mx-auto "
                        onChange={handleDateChangeOut}
                    
                        showDoubleView={true}
                        minDate={new Date()}
                        value={selectedDateOut} />
                }


                {
                    isShowIn &&
                    <Calendar className="mt-1 mx-auto"
                        onChange={handleDateChangeIn}

                        showDoubleView={true}
                        minDate={new Date()}
                        value={selectedDateIn} />
                }
            </div>


        </div>
    )
}

export default SearchBox