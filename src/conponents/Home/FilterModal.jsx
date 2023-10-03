import React, { useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react";



const FilterModal = () => {
    const [range, setRange] = useState("");
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(500);

    const handleRangeChange = (newRange) => {
        setRange(newRange);
        setMaxValue(range.maxValue)
        setMinValue(range.minValue)
    }

    const def = maxValue - minValue
console.log(def)


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <div>
                        <h3 className="font-bold text-xl">Type of place</h3>
                        <p className="pt-1 text-sm">A room in a home, plus access to shared spaces.</p>
                    </div>
                    <div className='my-8'>
                        <button className=" border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white font-bold py-3 px-9 rounded-l-xl">Any Type</button>
                        <button className=" border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white font-bold py-3 px-9">Any Type</button>
                        <button className=" border border-gray-400 hover:border-gray-600 focus:bg-black focus:text-white font-bold py-3 px-9 rounded-r-xl">Any Type</button>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Price range</h3>
                        <p className="pt-1 text-sm">Total prices for 5 nights before taxes</p>
                    </div>



                    <div className='my-8'>
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
                        <div  className='border border-gray-400 p-3 rounded-lg focus:outline-none'>
                            <label htmlFor="">Minimum</label>
                            <input value={minValue} type="text" />
                        </div>
                        <input className='border border-gray-400 p-3 rounded-lg' value={maxValue} type="text" />
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