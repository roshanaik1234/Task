import React from 'react'
import "./Dashboard.css"
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Layout from './Layout'

function Dashboard() {
  return (
    <>
      <div className="dashboardContainer">
        <Header />
        <div className="containerLayout">
         <Sidebar/>
        <Layout />
        </div>        
        <Footer />
      </div>
    </>
  )
}

export default Dashboard
