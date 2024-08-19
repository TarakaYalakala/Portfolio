import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
        <div className="ftr-container">
            <div className="footer-icons">
                <div className="mail">
                    tarakayalakala@gmail.com
                </div>
                <div className="main-icon">
                <a href='https://www.instagram.com/tarak_1_/' className="font-icon"><i className="fa-brands fa-instagram fa-2xl" style={{color: "white"}}></i></a>
                <a href='https://www.linkedin.com/in/taraka-y-aa3624255/' className="font-icon"><i className="fa-brands fa-linkedin fa-2xl" style={{color: "white"}}></i></a>
                <a href='/' className="font-icon"><i className="fa-solid fa-envelope fa-2xl" style={{color: "white",cursor:"pointer"}}></i></a>
                </div>
                <div className="self">
                  Copyrights@2024|Taraka
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer


// blueviolet