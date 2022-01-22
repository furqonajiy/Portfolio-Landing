import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/1-ITBisa-Logo-White-Text-Transparent-1050X400.png'
import './navbar.css'

const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about-me'>About Me</a></p>
    <p><a href='#project'>Project</a></p>
    <p><a href='#achievement'>Achievement</a></p>
    <p><a href='#experience'>Experience</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div class='ajiporto__navbar'>
            <div className='ajiporto__navbar-links'>
                <div className='ajiporto__navbar-links_logo'>
                    <img src={logo} alt='logo'/>
                </div>

                <div className='ajiporto__navbar-links_container'>
                    <Menu />
                </div>
            </div>

            <div className='ajiporto__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>

            <div className='ajiporto__navbar-menu'>
            {toggleMenu
                ? <RiCloseLine color='#ffffff' size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color='#ffffff' size={27} onClick={() => setToggleMenu(true) } />
            }
            {toggleMenu && (
                <div className='ajiporto__navbar-menu_container scale-up-center'>
                    <div className='ajiporto__navbar-menu_container-links'>
                        <Menu />
                        <div className='ajiporto__navbar-menu_container-links-sign'>
                            <p>Sign in</p>
                            <button type='button'>Sign up</button>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default Navbar