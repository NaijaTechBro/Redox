import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Post from '../Post/Post'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
      <div className="latest">
        <h4><u>Read Our Lastest</u> </h4>
      </div>
        <a href='/'><Post /></a>
        <a href='/'><Post /></a>
        <a href='/'><Post /></a>
        <Footer />
      </>
  )
}

export default Home