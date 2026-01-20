import React from 'react'
import compIcon from "../assest/download.jpg"
import profileImg from "../assest/dummyprofile.jpg"
import "./Header.css"

const Header = () => {
  return (
    <>
    <div className="headerContainer">
        <div className="container">
            <div className="companyIcon">
                <img src={compIcon} alt="Company Icon" width={30} className='CompanyIcon'/>
            </div>
            <div className="loginDetails" style={{display:"flex",alignItems: "center"}}>
                 <img src={profileImg} alt="Profile Img" width={30} className='profileImg'/>
                 <div className='profileDetails'>
                    <div className="profileName">Roshan Naik</div>
                    <div className="profilemail">Roshan@gmail.com</div>
                 </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header