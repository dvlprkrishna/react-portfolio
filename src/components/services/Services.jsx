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
              <p>Brand Identity Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Design and Figma Prototype</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Business Card Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Merch Designing</p>
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
              <p>Email Template Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Webpage Redevelopment / Optimizations</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog Creation / Wordpress Setup</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Static Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Development</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Social Media and Content</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Media Graphics Designing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search Engine optimizations [SEO]</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Meta Data and Keywords writing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO Auditing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Writing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services