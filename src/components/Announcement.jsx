import React from "react"
import announcement from "../img/announcement.gif"

function Announcement() {
  return (
    <div className="announcement-section">
        <figure>
            <img src={announcement} alt="Announcement" />
        </figure>
    </div>
  )
}

export default Announcement