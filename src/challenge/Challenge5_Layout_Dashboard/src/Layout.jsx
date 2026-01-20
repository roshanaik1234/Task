import React from 'react'
import Cards from './Cards'

const Layout = () => {
  return (
    <>
    <div className="dashboardContainer" style={{
            width: "100%",display: "flex",flexWrap: "wrap",overflow: "auto",alignItems:"center",justifyContent:"center"
    }}>
       {Array.from({ length: 12 }).map((_, index) => (
  <Cards key={index} />
))}
    </div>
    </>
  )
}

export default Layout