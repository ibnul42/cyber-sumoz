import React from "react"
import "./profile.scss"
import profile_bg from '../img/profile-bg.svg'
import anim from '../img/char.svg'

function Profile() {
  return (
    <div className="profile">
      <div className="profile-content">
        <div className="profile-bg">
            <img src={profile_bg} alt="profile" />
        </div>
        <div className="profile-body">
          <div className="body-left">
            {/* <img src={anim} alt="anim" /> */}
          </div>
          <div className="body-right">
          <p>dijsfbhokj soizdhgiod d ggsoizdhgiod d ggsoizdhgiod d ggsoizdhgiod d ggsoizdhgiod d ggsoizdhgiod d ggsoizdhgiod d ggsoizdhgiod d ggsoizdhgiod d ggsoizdhgiod d ggsoizdhgiod d gg iodogjjopdij goidfj goijg</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile