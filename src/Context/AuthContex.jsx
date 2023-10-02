import React, { createContext, useEffect, useState } from 'react'


export const context = createContext()

const AuthContex = ({ children }) => {
    const [hotel, setHotel] = useState([])


    useEffect((id = "National parks") => {
        fetch(`https://room-booking-server.vercel.app/hotels/${id}`)
            .then(res => res.json())
            .then(data => setHotel(data))
            .catch(e => console.error(e))
    }, [])


    const authInfo = { hotel, setHotel }
    return (
        <div>
            <context.Provider value={authInfo}>
                {children}
            </context.Provider>
        </div>
    )
}

export default AuthContex