import React from 'react'
import "./Navbar.css"
import { useState } from 'react'
import { useEffect,useRef } from 'react';
import {Link} from "react-router-dom"



function Navbar() {

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);


    
    const [toggle, settoggle] = useState(true);

    const [currentDate, setCurrentDate] = useState(new Date());

    const formattedTime = currentDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata', // Set the time zone to IST (Mumbai)
    });

    const togglePlay = () => {
      settoggle(!toggle);
    }

  return (
    <div>
      <nav className='navbar'>
        <div className="name">Taraka</div>
        <div className="nav-info">
            <div className="date">{formattedTime}</div>
            <div className="sandwitch">
  {toggle ? (
    <i className="fa-solid fa-bars fa-2xl" style={{ color: "white", cursor: "pointer" }} onClick={togglePlay}></i>
  ) : (
    <i className="fa-solid fa-xmark fa-2xl burger" style={{ color: "white", cursor: "pointer" }} onClick={togglePlay}></i>
  )}
</div>

  </div>
      </nav>
     {toggle?'': <div className="slide-nav">
        <ul>
          <li className='list-nav-one'><Link to="/" onClick={togglePlay}>Home</Link></li>
          <li className='list-nav-two'><Link to="/about" onClick={togglePlay}>About</Link></li>
          <li className='list-nav-three'><Link to="/" onClick={togglePlay}>Blog</Link></li>
        </ul>
      </div>}
    </div>
  )
}

export default Navbar
