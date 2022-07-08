import React from "react"
import hero from "../img/hero.gif"

function Hero() {
  return (
    <figure className="hero">
        <img src={hero} alt="Hero" />
    </figure>
  )
}

export default Hero