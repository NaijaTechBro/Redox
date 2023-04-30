import React from 'react'
import Sidebar from './Sidebar'
import Main from './main/main'
import './admin.css'

const Dashboard = () => {
  return (
    <>
    <div className="container">
    <Sidebar />
    <Main />
    </div>
    </>
  )
}

export default Dashboard