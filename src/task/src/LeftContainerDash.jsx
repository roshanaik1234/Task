import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const LeftContainerDash = () => {
  return (
    <div>
      <nav style={{padding: '10px', borderBottom: '1px solid #ccc'}}>
        <Link to="/left">Home</Link> | <Link to="/left/about">About</Link>
      </nav>
      <div style={{padding: '20px'}}>
        <Routes>
          <Route path='/left' element={<div>Left Container Dashboard Home</div>}/>
          <Route path='/left/about' element={<div>About Left Container Dashboard</div>}/>
        </Routes>
      </div>
    </div>
  )
}

export default LeftContainerDash