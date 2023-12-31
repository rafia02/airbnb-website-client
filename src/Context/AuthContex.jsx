import React, { createContext, useEffect, useState } from 'react'


export const context = createContext()

const AuthContex = ({ children }) => {
    const [hotel, setHotel] = useState([])
    const [showOut, setShowOut] = useState("")
    const [showIn, setShowIn] = useState("")
    const [adults, setAdults] = useState(0)
    const [childrens, setChildren] = useState(0)
    const [total, setTotal] = useState(0)
    const [country, setCountry] = useState("")
    const [show, setShow] = useState(false)

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(500);
    const [beds, setBeds] = useState("");
    const [rooms, setRooms] = useState("");
    const [baths, setBaths] = useState("");

    useEffect((id = "National parks") => {
        fetch(`https://room-booking-server.vercel.app/hotels/${id}`)
            .then(res => res.json())
            .then(data => setHotel(data))
            .catch(e => console.error(e))
    }, [])


    const authInfo = { hotel, minValue, setMinValue, maxValue, setMaxValue, beds, setBeds, rooms, setRooms, baths, setBaths,  show, setShow, setHotel, country, setCountry, showOut, total, setTotal, childrens, setChildren, setShowOut, showIn, setShowIn, adults, setAdults }
    return (
        <div>
            <context.Provider value={authInfo}>
                {children}
            </context.Provider>
        </div>
    )
}

export default AuthContex