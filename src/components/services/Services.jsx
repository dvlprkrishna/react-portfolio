import React from 'react'
import './services.css'

import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>
      <hr />
      <div className='container container__services'>
      <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Web Design & Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Corporate Branding & Graphics Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile App Design </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma Prototyping and Mockups</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing Page Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Email Template Creations</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Compleate Website Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Webpage redevelopment / optimizations</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Static Website Development</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website content writing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Product page descriptions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>eBook Cover Designing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Media Branding and Graphics.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search Engine optimizations</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Meta Data and Keywords writing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services