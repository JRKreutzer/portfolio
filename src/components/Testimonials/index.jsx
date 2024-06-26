import React from 'react';
import { testimoniais } from '../../constants'
import './testimonials.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="testimonials container section">
            <h2 className="section__title">Depoimentos</h2>
            <span className="section__subtitle">O que dizem sobre mim</span>
            <span className="section__subtitle">{'(Sessão em construção. O conteúdo atual é meramente ilustrativo e está sujeito a alterações.)'}</span>

            <Swiper 
                className="testimonials__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  }
                }}
                modules={[Pagination]}
            >

                {
                    testimoniais.map(({id, image, title, description}) => {
                        return (
                            <SwiperSlide key={id} className='testimonial__card'>
                                <img src={image} alt={title} className='testimonial__img' />
                                <h3 className="testimonial__name">{title}</h3>
                                <p className="testimonial__description">{description}</p>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Testimonials