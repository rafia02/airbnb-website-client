import React, { useContext, useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import { Link, NavLink } from 'react-router-dom';
import "../../App.css"
import { context } from '../../Context/AuthContex';


const FilterModal = () => {
    const { minValue, setMinValue, maxValue, setMaxValue, beds, setBeds, rooms, setRooms, baths, setBaths } = useContext(context)
    const [range, setRange] = useState("");
    // const [minValue, setMinValue] = useState(0);
    // const [maxValue, setMaxValue] = useState(500);
    // const [beds, setBeds] = useState("");
    // const [rooms, setRooms] = useState("");
    // const [baths, setBaths] = useState("");

    const handleRangeChange = (newRange) => {
        setRange(newRange);
        setMaxValue(range.maxValue)
        setMinValue(range.minValue)
    }

    const def = maxValue - minValue
    console.log(def)

    const num = ["Any", 1, 2, 3, 4, 5, 6]


    console.log(rooms, beds, baths)


    return (
        <div>


            <dialog id="my_modal_2" className="modal ">
                <div className="modal-box  text-gray-600">
                    <div>
                        <h3 className="font-bold text-2xl">Type of place</h3>
                        <p className="pt-1 text-sm">A room in a home, plus access to shared spaces.</p>
                    </div>
                    <div className='mt-8 mb-12'>
                        <button className=" border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white font-bold py-3 px-9 rounded-l-xl">Any Type</button>
                        <button className=" border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white font-bold py-3 px-9">Room</button>
                        <button className=" border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white font-bold py-3 px-9 rounded-r-xl">Entire home</button>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl">Price range</h3>
                        <p className="pt-1 text-sm">Total prices for 5 nights before taxes</p>
                    </div>

                    <div className='my-10'>
                        <MultiRangeSlider
                            min={0}
                            max={500}
                            step={1}
                            ruler={false}
                            label={false}
                            range={range}
                            onChange={handleRangeChange}
                        />
                    </div>

                    <div className='grid grid-cols-2 gap-5'>
                        <div className='border-2 hover:border-black duration-500 border-gray-400 py-2 px-5 rounded-lg'>
                            <label className='text-sm' htmlFor="">Minimum</label>
                            <input className='outline-none' value={`$ ${minValue}`} type="text" />
                        </div>
                        <div className='border-2 hover:border-black duration-500 border-gray-400 py-2 px-5 rounded-lg'>
                            <label className='text-sm' htmlFor="">Maximum</label>
                            <input className='outline-none' value={`$ ${maxValue}`} type="text" />
                        </div>
                    </div>

                    <div className='mt-14'>
                        <h3 className="font-bold text-2xl">Rooms and beds</h3>
                        <div>
                            <p className="pt-8 text-lg font-semibold">Bedrooms</p>
                            <div className='flex gap-3 mt-5'>



                                {
                                    num.map(i => <button onClick={() => setRooms(i)} className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-5 rounded-2xl">{i}</button>)
                                }


                                {/* <button className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-6 rounded-2xl">Any</button>
                                <button className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-5 rounded-2xl">1</button>
                                <button className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-5 rounded-2xl">2</button>
                                <button className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-5 rounded-2xl">3</button>
                                <button className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-5 rounded-2xl">4</button>
                                <button className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-5 rounded-2xl">5</button>
                                <button className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-5 rounded-2xl">+6</button> */}
                            </div>
                        </div>


                        <div>
                            <p className="pt-8 text-lg font-semibold">Beds</p>
                            <div className='flex gap-3 mt-5'>
                                {
                                    num.map(i => <button onClick={() => setBeds(i)} className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-5 rounded-2xl">{i}</button>)
                                }
                            </div>
                        </div>

                        <div>
                            <p className="pt-8 text-lg font-semibold">Bathrooms</p>
                            <div className='flex gap-3 mt-5'>
                                {
                                    num.map(i => <button onClick={() => setBaths(i)} className="border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white text-sm py-2 px-5 rounded-2xl">{i}</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className='text-end mt-8 '>
                        <Link to="/filter/hotel"  className='px-12 py-3 text-xl bg-black text-white font-bold rounded-xl hover:bg-gray-600  duration-500'>Search</Link>
                    </div>

                </div>



                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default FilterModal