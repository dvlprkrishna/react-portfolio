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
    name: 'john snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, voluptatum qui! Unde facere, harum excepturi provident porro reiciendis quam. Dolorum.'
  },
  {
    avatar: avtr2,
    name: 'john 2',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, voluptatum qui! Unde facere, harum excepturi provident porro reiciendis quam. Dolorum.'
  },
  {
    avatar: avtr3,
    name: 'john 3',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, voluptatum qui! Unde facere, harum excepturi provident porro reiciendis quam. Dolorum.'
  },{
    avatar: avtr4,
    name: 'john 4',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, voluptatum qui! Unde facere, harum excepturi provident porro reiciendis quam. Dolorum.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

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