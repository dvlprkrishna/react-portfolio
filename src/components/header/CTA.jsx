import React from 'react'
import pdf from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn ' href={pdf} download>Download CV / Resume</a>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA