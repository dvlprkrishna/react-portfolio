import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'
const data = [
  {
      "id": 1,
      "image": img1,
      "title": "Dhanraj Digital Photo Studio",
      "github": "#",
      "disabled": true,
      "demo": "https://dhanrajdigitalphotostudio.com/"
  },
  {
      "id": 2,
      "image": img2,
      "title": "Waah Pune Branding",
      "disabled": true,
      "github": "#",
      "demo": "https://www.waahpune.com/"
  },
  {
      "id": 3,
      "image": img3,
      "title": "Highvoltage Technologies",
      "github": "#",
      "disabled": true,
      "demo": "#"
  },
  {
      "id": 4,
      "image": img4,
      "title": "Knocdoorservices",
      "github": "#",
      "disabled": true,
      "demo": "https://www.knocdoorservices.com/"
  },
  {
      "id": 5,
      "image": img5,
      "title": "Teamconsultant.org",
      "github": "#",
      "disabled": true,
      "demo": "https://teamconsultant.org/"
  },
  {
      "id": 6,
      "image": img6,
      "title": "Dvlpr.in",
      "github": "#",
      "disabled": true,
      "demo": "https://dvlpr.in/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2><hr />
      <div className='container portfolio__container' >

      {
        data.map(({id, image,title,github,demo,disabled})=>{
          return (<article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={image} className="portfolio__item-image" alt="" />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>

            { disabled? (''):(<a href={github} className='btn' target='_blank'>Github</a>) }
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

          )
        })
      }

</div>

    </section>
  )
}

export default Portfolio