import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className='container contact__container'>
        <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail  className='contact__option-icon' />
              <h4>Email</h4>
              <h5>dvlprkrishna@gmail.com</h5>
              <a href="mailto:dvlprkrishna@gmail.com">Send a Message</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>dvlprkrishna</h5>
              <a href="mailto:dvlprkrishna@gmail.com">Send a Message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp  className='contact__option-icon' />
              <h4>Contact</h4>
              <h5>+91 9820839348</h5>
              <a href="https://wa.me/+919820839348">Send a Message</a>
            </article>
          </div>
      </div>
    </section>
  )
}

export default Contact