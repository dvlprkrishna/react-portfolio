import React from 'react'
import CTA from './CTA'
import profile from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

import './header.css'


const Header = () => {
  return (
    <header id='home'>
        <div className="container header__container">
            <h5>Hello I'm 👋</h5>
            <h1>Krishna Sahu</h1>
            <h5 className="text-light">Full Stack Developer </h5>
            <CTA />
            <div className='profile'>
                <img src={profile} alt="" />
            </div>
            <HeaderSocials />

            <a href="#about" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header