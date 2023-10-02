import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FiSearch } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";




const SearchBox = () => {
    const [isShowGuest, setIsShowGuest] = useState(false);
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
        <div className=' w-full md:w-4/6 mx-auto'>
        <div className='flex flex-col md:flex-row border  shadow-sm border-gray-300 opacity-95 rounded-full   bg-opacity-60'>
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

            <div onClick={() => setIsShowGuest(!isShowGuest)} className='flex items-center'>
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
                <Calendar className="mt-3 mx-auto "
                    onChange={handleDateChangeOut}

                    showDoubleView={true}
                    minDate={new Date()}
                    value={selectedDateOut} />
            }


            {
                isShowIn &&
                <Calendar className="mt-3 mx-auto"
                    onChange={handleDateChangeIn}

                    showDoubleView={true}
                    minDate={new Date()}
                    value={selectedDateIn} />
            }
        </div>


        {
            isShowGuest &&
            <div className=' w-[450px] mt-3 rounded-3xl absolute right-60 border  shadow-xl px-8 py-5'>
                <div className='flex justify-between border-b pb-5 items-center'>
                    <div>
                        <h3 className='text-lg font-semibold'>Adults</h3>
                        <p>Ages 13 or above</p>

                    </div>

                    <div className='flex items-center gap-5'>
                        <div>
                            <BiMinus className='text-4xl p-[5px] border-gray-400 rounded-full font-semibold border'></BiMinus>
                        </div>
                        <div className='text-lg font-semibold'>2</div>
                        <div>
                            <BsPlus className='text-4xl p-[5px] border-gray-400 rounded-full font-semibold border'></BsPlus>
                        </div>
                    </div>
                </div>

                <div className='flex py-5  justify-between items-center'>
                    <div>
                        <h3 className='text-lg font-semibold'>Children</h3>
                        <p>Ages 2–12</p>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div>
                            <BiMinus className='text-4xl p-[5px] border-gray-400 rounded-full font-semibold border'></BiMinus>
                        </div>
                        <div className='text-lg font-semibold'>2</div>
                        <div>
                            <BsPlus className='text-4xl p-[5px] border-gray-400 rounded-full font-semibold border'></BsPlus>
                        </div>
                    </div>
                </div>

            </div>
        }



    </div>
    )
}

export default SearchBox