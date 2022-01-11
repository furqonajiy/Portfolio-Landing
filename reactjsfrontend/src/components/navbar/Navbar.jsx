import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () => {
    return (
        <div class='ajiporto__navbar'>
            <div className='ajiporto__navbar-links'>
                <div className='ajiporto__navbar-links_logo'>
                    <img src={logo} alt='logo'/>
                </div>
            </div>

            <div className='ajiporto__navbar-links_container'>
                <p><a href='home'>Home</a></p>
                <p><a href='about-me'>About Me</a></p>
                <p><a href='project'>Project</a></p>
                <p><a href='achivement'>Achievement</a></p>
                <p><a href='experience'>Experience</a></p>
            </div>
        </div>
    )
}

export default Navbar
