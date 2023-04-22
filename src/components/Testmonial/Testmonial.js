import React from 'react'
import './Testmonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import a from '../../img/certify/1.jpg'
import b from '../../img/certify/2.jpg'
import c from '../../img/certify/3.jpg'
import d from '../../img/certify/4.jpg'
import e from '../../img/certify/5.jpg'
import f from '../../img/certify/6.jpg'
import g from '../../img/certify/7.jpg'
import h from '../../img/certify/8.jpeg'
import i from '../../img/certify/9.jpg'
import j from '../../img/certify/10.png'
import k from '../../img/certify/11.png'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
 const Testmonial=()=>{
    const clients=[a,b,c,d,e,f,g,h,i,j,k];
  return (
    <div className='t-wrapper' id='Testmonial'>
        <div className='t-heading'>
            <span>This are Certificates </span>
            <span>which represents My Exceptional Work..</span>
            <div className='blur t-b1' style={{background:'var(--purple)',top:'16rem',left:'38rem'}}></div>
            <div className='blur t-b2' style={{background:'skyblue',top:'9rem',left:'0'}}></div>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className='testimonial'>
                        <img src={client}/></div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testmonial