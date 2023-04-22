import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import Musicapp from '../../img/musicapp.png'
import 'swiper/css'
import { useContext } from 'react';
import { themeContext } from '../../Context';
function Portfolio() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className='portfolio' id='Portifolio'>
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper
         spaceBetween={50}
         slidesPerView={3}
         grabCursor={true}
         className='portfolio-slider'>
            <SwiperSlide>
                <a href='https://neon-douhua-61d7b3.netlify.app/'><img src={Sidebar}/></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://gella-food-app.netlify.app/'>
                <img src={Ecommerce}/></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://gella-bingo.netlify.app/'>
                <img src={HOC}/></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://scriibble.netlify.app/'>
                <img src={Musicapp}/></a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio