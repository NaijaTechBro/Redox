import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/scss/App.scss';
// Imports
import Hero from './components/Hero/Hero';
import Home from './pages/Home/Home';
import About from './components/About/About';
import Fresources from './components/Fresources/Fresources';
import Blog from './pages/Blog/Blog';
import Footer from './components/Footer/Footer';
//Admin
import Write from './pages/Admin/post/CreatePost';
import Register from './pages/Admin/Auth/Register';
import Admin from './pages/Admin/Admin';
import Login from './pages/Admin/Auth/Login';
import Dashboard from './pages/Admin/Dashboard';
import ForgotPass from './pages/Admin/Auth/ForgotPass';
import ResetPass from './pages/Admin/Auth/ResetPass';
import ChangePass from './pages/Admin/Auth/ChangePass';
import ManageAdmin from './pages/Admin/manage-admin/ManageAdmin';
import Sendmail from './pages/Admin/email/Sendmail';
import Users from './pages/Admin/users/Users';
import Profile from './pages/Admin/Profile';
import Settings from './pages/Admin/Settings';


function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hero' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/free-resources' element={<Fresources />} />
            <Route path='/crypto-news' element={<Blog />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/*' element={<Home />} />            
            {/* <Route path='/' /> */}
                        {/* Admin */}
            <Route path='/admin/create-post' element={<Write />} />
            <Route path='/admin/login' element={<Login />} />
            <Route path='/admin/register' element={<Register />} />
            <Route path='/admin/home' element={<Admin />} />
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/forgot-pass' element={<ForgotPass />} />
            <Route path='/admin/reset-pass' element={<ResetPass />} />
            <Route path='/admin/change-pass' element={<ChangePass />} />
            <Route path='/admin/manage' element={<ManageAdmin />} />
            <Route path='/admin/send-mail' element={<Sendmail />} />
            <Route path='/admin/users' element={<Users />} />
            <Route path='/admin/settings' element={<Settings />} />
            <Route path='/admin/profile' element={<Profile />} />
         
         </Routes>
        </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
