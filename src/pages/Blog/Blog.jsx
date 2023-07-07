import React from 'react'
import './blog.css'
import Post from '../../pages/Post/Post'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const Blog = () => {
  return (
    <>
    <Navbar />
    <div className="header">
      <h3>Crypto News</h3>
    </div>
    <a href='/'><Post /></a>
    <div className="link">
    <Link to='/'><button>Read More</button></Link>
    </div>
    <Footer />
</>
  )
}

export default Blog