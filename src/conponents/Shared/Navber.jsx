import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import SearchBox from './SearchBox';
import { context } from '../../Context/AuthContex';



const manueBar = <>
    <Link to="/" className='px-1  mb-2 md:mb-0 mr-2  text-lg'>Stays</Link>
    <Link to="/" className='px-1  mr-2 mb-2 md:mb-0   text-lg'>Experiences</Link>
    <Link to="/" className='px-1   mb-2 md:mb-0   text-lg'>Online Experiences</Link>


</>


const Navber = () => {
    const {show, setShow} = useContext(context)
const navigete = useNavigate()

    const handleShow = ()=>{
        setShow(!show)
        navigete("/")
    }
    // const [show, setShow] = useState(false)
    return (
        <div className=' shadow-sm md:mx-4 md:py-2 '>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 text-center shadow bg-base-100 w-52">
                            {manueBar}

                        </ul>
                    </div>
                    <Link to="/" className='h-[32px] w-[100px]'>
                        <img className='h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCcR9xjgPrA-QlIJfm7X7YS5FUvjph_FvBSBtP7oAvc3KbCLmD69P_VyJIJT4gCFEUA&usqp=CAU" alt="" />
                    </Link>
                </div>

                <div onClick={handleShow} className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            show && manueBar
                        }
                        {
                            !show &&
                            <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-300 border rounded-full ">
                                <input
                                    type="search"
                                    placeholder=""
                                    className="py-2.5 w-[20rem] rounded-full outline-0"
                                />
                                <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
                                    <button className="w-full">Place</button>
                                    <button className="border-l border-x px-6">Time</button>
                                    <button className="w-full text-gray-600/60 pl-2">Add guest</button>
                                </div>
                                <div className="bg-[#FF385C] p-2 rounded-full mr-2">
                                    <FiSearch className="text-white w-full" />
                                </div>
                            </div>
                        }


                    </ul>
                </div>


                <div className="navbar-end">





                </div>
            </div>

            {
                show && <SearchBox></SearchBox>
            }
        </div>





    )
}

export default Navber