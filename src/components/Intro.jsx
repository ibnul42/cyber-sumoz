import React from "react"
import intro from "../img/intro.svg"
import twitterYellow from "../img/twitterYellow.svg"

function Intro() {
  return (
    <div className="intro-section">
        <figure>
            <img src={intro} alt="Intro" />
        </figure>
        <div className="section-content">
            <div className="content-description">
                <h1>Meet Po,</h1>
                <p>Po is the hero of the Cyber Sumoz, the first true P2E PVP Battleverse Game on the Solana Blockchain. Po is a direct descendant of an ancient syndicate of 10,000 sumo warriors who were defeated by an evil entity named Akuma (big chungus mf...). Now Po and his fellow fighters must prevail and destroy Akuma in an exciting new but familiar battleverse gaming experience.</p>
                <ul>
                    <li><button className="twitterYellow"><img src={twitterYellow} alt="Twitter" /></button></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Intro