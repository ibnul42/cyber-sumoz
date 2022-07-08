import React from "react"
import comingSoon from "../img/comingSoon.svg"

function Soon() {
  return (
    <div className="soon-section">
        <div className="section-content">
            <h1>[SEE WHITE PAPER V1.0]</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exas ea commodo consequat nostrud exercitation ullamco.</p>
            <ul>
                <li><button className="comingSoon"><img src={comingSoon} alt="Coming Soon" /></button></li>
            </ul>
        </div>
    </div>
  )
}

export default Soon