import React from 'react'

const Box = ({ id, selected, onClick }) => {
    return (
        <div
            className={`w-20 h-20 m-2 border-2 border-gray-200 hover:border-gray-500 duration-500 rounded-lg cursor-pointer ${selected ? 'bg-gray-100 border-gray-500' : 'bg-white'
                }`}
            onClick={() => onClick(id)}
            
        ></div>
    )
}

export default Box