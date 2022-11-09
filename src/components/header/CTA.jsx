import React from 'react'
import pdf from '../../assets/Krishna Sahu Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn ' href={pdf} download>Download CV / Resume</a>
        <a className='btn btn-primary' href="#about">About Me</a>
    </div>
  )
}

export default CTA