import React from 'react'

import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
// import { Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container"  >
      {/* // modules={[Pagination ]}
      // spaceBetween={40}
      // slidesPerView={1}
      // pagination ={{clickable :true}}
      //  onSlideChange={() => console.log('slide change')}
      //  onSwiper={(swiper) => console.log(swiper)} */}
      
    

        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avtar" />
          </div>
          <div>
          <h5 className='client__name'> Achiver</h5>
            <small className = 'client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eos, sit totam modi ex a iusto officia, commodi minus esse
              doloribus, error aspernatur et labore. 
              Eius laudantium neque similique impedit quos?
            </small>
          </div>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avtar" />
            </div>
            <div>
            <h5 className='client__name'> Achiver</h5>
            <small className = 'client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eos, sit totam modi ex a iusto officia, commodi minus esse
              doloribus, error aspernatur et labore. 
              Eius laudantium neque similique impedit quos?
            </small>
          </div>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avtar" />
            </div>
            <div>
            <h5 className='client__name'> Achiver</h5>
            <small className = 'client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eos, sit totam modi ex a iusto officia, commodi minus esse
              doloribus, error aspernatur et labore. 
              Eius laudantium neque similique impedit quos?
            </small>
            
          </div>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avtar" />
            </div>
            <div>
            <h5 className='client__name'> Achiver</h5>
            <small className = 'client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eos, sit totam modi ex a iusto officia, commodi minus esse
              doloribus, error aspernatur et labore. 
              Eius laudantium neque similique impedit quos?
            </small>
            
          </div>
        </article>

      </div>
    </section>
  )
}
// import './testimonials.css'
export default testimonials
