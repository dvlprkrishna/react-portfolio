import React from 'react'
import aboutImg from '../../assets/me-about.jpg'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (

    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>
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
              <h5>Expereience</h5>
              <small>5+ Years Working</small>
            </article>
            <article className="about__card">
                <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
                <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>85+ Completed</small>
            </article>
          </div>
          <div className="about__content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit sit error quisquam eum nostrum perferendis reprehenderit et quasi assumenda placeat, temporibus eaque culpa hic vitae id! Incidunt, rerum ab.</p>
            <a href="#" className='btn'>Let's Talk</a>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About