import React from 'react'
import './admin.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import AdminHeader from './Auth/AdminHeader'

const Admin = () => {
  return (
    <>
    <AdminHeader />
    <Hero />
    <Footer />
    </>
  )
}

export default Admin