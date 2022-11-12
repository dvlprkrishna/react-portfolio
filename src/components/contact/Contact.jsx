import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact</h2>
      <hr />
      <div className='container contact__container'>
        <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail  className='contact__option-icon' />
              <h4>Email</h4>
              <h5>Dvlprkrishna@gmail.com</h5>
              <a href="mailto:dvlprkrishna@gmail.com">Send an E-Mail</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>Dvlprkrishna</h5>
              <a href="https://m.me/dvlprkrishna" target="_blank">Say Hi</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp  className='contact__option-icon' />
              <h4>Contact</h4>
              <h5>+91 9820839348</h5>
              <a href="https://wa.me/+919820839348" target="_blank">Let's Talk</a>
            </article>
          </div>
      </div>
    </section>
  )
}

export default Contact