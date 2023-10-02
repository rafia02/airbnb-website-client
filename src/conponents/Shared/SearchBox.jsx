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

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);


    const checkIn = `${selectedDateIn.getDate()} - ${selectedDateIn.getMonth()} - ${selectedDateIn.getFullYear()}`
    const checkOut = `${selectedDateOut.getDate()} - ${selectedDateOut.getMonth()} - ${selectedDateOut.getFullYear()}`
    // console.log(checkOut)

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


    let adltsum = 0
    const handleAdultsPlus = () => {
        adltsum = adults + 1
        setAdults(adltsum)
    }

    const handleAdultsMinus = () => {

        if (adults > 0) {
            adltsum = adults - 1
            setAdults(adltsum)
        }
    }


    let childrensum = 0
    const handleChildrenPlus = () => {
        childrensum = children + 1
        setChildren(childrensum)
    }

    const handleChildrenMinus = () => {

        if (children > 0) {
            childrensum = children - 1
            setChildren(childrensum)
        }
    }


    const handleSearch = (e)=>{
        e.preventDefault();
console.log(e.target.place.value)
    }

    return (
        <div  className=' w-full pb-5 md:w-4/6 mx-auto'>
            <form onSubmit={handleSearch} className='flex flex-col md:flex-row pr-10 border md:shadow-md shadow-sm border-gray-300 opacity-95 rounded-2xl mx-5 md:rounded-full   bg-opacity-60'>
                <div className='flex flex-col px-7 py-3 rounded-l-full w-full  md:w-80 '>
                    <label>Where</label>
                    <input type="text" name='place' className='outline-none' placeholder='Search destinations' />

                </div>
                <div className='border md:visible hidden h-10 my-auto'></div>

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

                <div  className='flex  items-center'>
                    <div onClick={() => setIsShowGuest(!isShowGuest)} className='flex flex-col px-7 py-3 rounded-l-full   w-48 '>
                        <label>Who</label>
                        <input type="text" className='outline-none' placeholder='Add guest' />
                    </div>


                    <FiSearch className="text-white w-10 h-10 rounded-full p-[14px] font-extrabold text-center   bg-[#FF385C] text-5xl " />


                </div>


            </form>







            <div className='mx-auto z-50 absolute w-4/6'>
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


            <div className=''>
                {
                    isShowGuest &&
                    <div className=' w-[450px] mt-3 z-50 bg-white rounded-3xl absolute right-60 border  shadow-xl px-8 py-5'>
                        <div className='flex justify-between border-b pb-5 items-center'>
                            <div>
                                <h3 className='text-lg font-semibold'>Adults</h3>
                                <p>Ages 13 or above</p>

                            </div>

                            <div className='flex items-center gap-5'>
                                <div onClick={handleAdultsMinus}>
                                    <BiMinus className='text-4xl p-[5px] border-gray-400 rounded-full font-semibold border'></BiMinus>
                                </div>
                                <div className='text-lg font-semibold'>{adults}</div>
                                <div onClick={handleAdultsPlus}>
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
                                <div onClick={handleChildrenMinus}>
                                    <BiMinus className='text-4xl p-[5px] border-gray-400 rounded-full font-semibold border'></BiMinus>
                                </div>
                                <div className='text-lg font-semibold'>{children}</div>
                                <div onClick={handleChildrenPlus}>
                                    <BsPlus className='text-4xl p-[5px] border-gray-400 rounded-full font-semibold border'></BsPlus>
                                </div>
                            </div>
                        </div>

                    </div>
                }

            </div>


        </div>
    )
}

export default SearchBox