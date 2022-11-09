import React from 'react'
import './testimonials.css'

import avtr1 from '../../assets/avatar1.jpg'
import avtr2 from '../../assets/avatar2.jpg'
import avtr3 from '../../assets/avatar3.jpg'
import avtr4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: avtr1,
    name: 'Ashish Waman',
    review: 'I have worked with Krishna in Accenture for more than a couple of years. Krishna is a proactive, result-oriented, responsible, and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill in WEB DEVELOPMENT, and React. Krishna is a great asset to any company.'
  },
  {
    avatar: avtr2,
    name: 'Zaid Siddiqui',
    review: 'Krishna worked with me on web projects for one of the biggest Pharma firm for their marketing vertical, and he was routinely throughout that time the most creative and capable web developers we had. He had a fantastic eye for unique designs and was able to implement some of the best strategies our company had.'
  },
  {
    avatar: avtr2,
    name: 'Zaid Siddiqui',
    review: 'Krishna developed UI design and web page design and development. He played a significant role, often, in developing and implementing overall web strategies, and dealt with the details along with the bigger picture. His coding was excellent, and his designs were unique and innovative, so clients were always happy. He was always thoughtful and considerate, an excellent team player who can also work independently and do a fantastic job. Krishna can seemingly do anything, so he is very highly recommended.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Testimonials</h2>
      <hr />
      <Swiper className="container mySwiper testimonials__container"
       spaceBetween={30}
       pagination={{
         clickable: true,
       }}
       modules={[Pagination]} >
        {
          data.map(({avatar,
            name,
            review})=>{
            return (
            <SwiperSlide className="testimonial mySwiper">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
              </small>
            </SwiperSlide>)
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials