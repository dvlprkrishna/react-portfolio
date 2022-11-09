import React from 'react'
import aboutImg from '../../assets/me-about.jpg'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (

    <section id='about'>
        <h2>About Me</h2>
        <hr />
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutImg} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
                <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>
            <article className="about__card">
                <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>90+ Worldwide</small>
            </article>
            <article className="about__card">
                <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>85+ Completed</small>
            </article>
          </div>
          <div className="about__content">
            <p>Full stack web developer having more than 5+ years of experience in building end to end robust Responsive Web Apps and websites. Having distinct exposure in working for startups and MNC's in pharma, edtech domain.</p>
            <a href="#experience" className='btn'>More About Me</a>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About