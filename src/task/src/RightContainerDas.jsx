import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const RightContainerDas = () => {
  return (
    <div>
      <nav style={{padding: '10px', borderBottom: '1px solid #ccc'}}>
        <Link to="/right">Home</Link> | <Link to="/right/about">About</Link>
      </nav>
      <div style={{padding: '20px'}}>
        <Routes>
          <Route path='/right' element={<div>Right Container Dashboard Home</div>}/>
          <Route path='/right/about' element={<div>Right Container Dashboard About</div>}/>
        </Routes>
      </div>
    </div>
  )
}

export default RightContainerDas