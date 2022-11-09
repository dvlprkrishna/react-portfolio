import React from 'react'

import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <hr />
      <div className='container experience__container'>
      <div className='experience__frontend'>
          <h3>FrontEnd Developement</h3>
          <div className='experience__content'>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>HTML/CSS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Javascript</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>ReactJs</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Developement</h3>
          <div className='experience__content'>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Node.JS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>PHP</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>MySQL</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Python</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience