import React from 'react'
import './Dashbord.css'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import LeftContainerDash from './LeftContainerDash'
import RightContainerDas from './RightContainerDas'

const Dashbord = () => {
  return (
    <div className='maincontainerTask'>
      <Header/>
      <BrowserRouter>
        <div style={{display:"flex", height:"93vh"}}>      
          <div className='SubContainer leftDiv'>
            <LeftContainerDash/>
          </div>
          <div className='SubContainer rightDiv'>
            <RightContainerDas/>
          </div>      
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default Dashbord