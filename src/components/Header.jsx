import React from "react"
import logo from "../img/logo.svg"
import hbg from "../img/hamburger.svg"

function Header() {
  let count = 0
  const openHBG = () => {
    if(count%2 == 0) {
      document.querySelector(".openHBG").style.display = "flex";
    } else {
      document.querySelector(".openHBG").style.display = "none";
    }
    count++
  }
  return (
    <header>
        <nav className="web">
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Roadmap</a></li>
                <li><a href="/"><img src={logo} alt="Cyber Sumoz" className="logo" /></a></li>
                <li><a href="/">White Paper</a></li>
                <li><a href="/">FAQs</a></li>
            </ul>
        </nav>
        <nav className="mobile">
            <ul>
                <li><a href="/"><img src={logo} alt="Cyber Sumoz" className="logo" /></a></li>
                <li><a onClick={openHBG}><img src={hbg} alt="Hamburger" width={56} /></a></li>
            </ul>
            <ul className="openHBG">
                <li><a href="/">About</a></li>
                <li><a href="/">Roadmap</a></li>
                <li><a href="/">White Paper</a></li>
                <li><a href="/">FAQs</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header