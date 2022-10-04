import React from 'react'
import {BsLinkedin,BsGithub, BsFacebook} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/reactjsdev/" target="_blank">
         <BsLinkedin />
        </a>
        <a href="https://github.com/dvlprkrishna" target="_blank">
         <BsGithub />
        </a>
        <a href="https://www.facebook.com/dvlprkrishna" target="_blank">
         <BsFacebook />
        </a>
    </div>
  )
}

export default HeaderSocials