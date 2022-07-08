import React from "react"
import img1A from "../img/slideA/img1.svg"
import img2A from "../img/slideA/img2.svg"
import img3A from "../img/slideA/img3.svg"
import img4A from "../img/slideA/img4.svg"
import img5A from "../img/slideA/img5.svg"
import img6A from "../img/slideA/img6.svg"
import img7A from "../img/slideA/img7.svg"
import img8A from "../img/slideA/img8.svg"
import img1B from "../img/slideB/img1.svg"
import img2B from "../img/slideB/img2.svg"
import img3B from "../img/slideB/img3.svg"
import img4B from "../img/slideB/img4.svg"
import img5B from "../img/slideB/img5.svg"
import img6B from "../img/slideB/img6.svg"
import img7B from "../img/slideB/img7.svg"
import img8B from "../img/slideB/img8.svg"

function Teasure() {
  window.onscroll = () => {
    scrollFunction()
  }
  let count = 40
  const scrollFunction = () => {
    if((document.body.scrollTop > 1360) || (document.documentElement.scrollTop > 1360) || (document.body.scrollTop < 3280) || (document.documentElement.scrollTop < 3280)) {
      document.getElementById("imgR1").style.transform = "translateX(" + (240 - count) + "px)"
      document.getElementById("imgR2").style.transform = "translateX(" + (240 - count) + "px)"
      document.getElementById("imgR3").style.transform = "translateX(" + (240 - count) + "px)"
      document.getElementById("imgR4").style.transform = "translateX(" + (240 - count) + "px)"
      document.getElementById("imgR5").style.transform = "translateX(" + (240 - count) + "px)"
      document.getElementById("imgR6").style.transform = "translateX(" + (240 - count) + "px)"
      document.getElementById("imgR7").style.transform = "translateX(" + (240 - count) + "px)"
      document.getElementById("imgR8").style.transform = "translateX(" + (240 - count) + "px)"
      document.getElementById("imgR9").style.transform = "translateX(" + (-1200 + count) + "px)"
      document.getElementById("imgR10").style.transform = "translateX(" + (-1200 + count) + "px)"
      document.getElementById("imgR11").style.transform = "translateX(" + (-1200 + count) + "px)"
      document.getElementById("imgR12").style.transform = "translateX(" + (-1200 + count) + "px)"
      document.getElementById("imgR13").style.transform = "translateX(" + (-1200 + count) + "px)"
      document.getElementById("imgR14").style.transform = "translateX(" + (-1200 + count) + "px)"
      document.getElementById("imgR15").style.transform = "translateX(" + (-1200 + count) + "px)"
      document.getElementById("imgR16").style.transform = "translateX(" + (-1200 + count) + "px)"
      count++
    }
  }
  return (
    <div className="teaser-section">
        <div className="section-content">
            <h1>[THE NON-FUNGIES]<span>Genesis Collection</span></h1>
        </div>
        <figure>
            <div className="slideA">
                <img id="imgR1" src={img8A} alt="Sumo" />
                <img id="imgR2" src={img7A} alt="Sumo" />
                <img id="imgR3" src={img6A} alt="Sumo" />
                <img id="imgR4" src={img5A} alt="Sumo" />
                <img id="imgR5" src={img4A} alt="Sumo" />
                <img id="imgR6" src={img3A} alt="Sumo" />
                <img id="imgR7" src={img2A} alt="Sumo" />
                <img id="imgR8" src={img1A} alt="Sumo" />
            </div>
            <div className="slideB">
                <img id="imgR9" src={img8B} alt="Sumo" />
                <img id="imgR10" src={img7B} alt="Sumo" />
                <img id="imgR11" src={img6B} alt="Sumo" />
                <img id="imgR12" src={img5B} alt="Sumo" />
                <img id="imgR13" src={img4B} alt="Sumo" />
                <img id="imgR14" src={img3B} alt="Sumo" />
                <img id="imgR15" src={img2B} alt="Sumo" />
                <img id="imgR16" src={img1B} alt="Sumo" />
            </div>
        </figure>
    </div>
  )
}

export default Teasure