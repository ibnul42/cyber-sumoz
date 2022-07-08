import React from "react"
import community from "../img/community.svg"
import discordYellow from "../img/discordYellow.svg"
import twitterBlue from "../img/twitterBlue.svg"

function Join() {
  return (
    <div className="community-section">
        <figure>
            <img src={community} alt="Community" />
        </figure>
        <div className="section-content">
            <div className="content-description">
                <h1>Join Community</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturd cillum dolore eu fugiat.</p>
                <ul>
                    <li><button className="discordYellow"><img src={discordYellow} alt="Discord" /></button></li>
                    <li><button className="twitterBlue"><img src={twitterBlue} alt="Twitter" /></button></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Join