import React from 'react'
import Upwork from '../../img/Upwork.png'
import Facebook from '../../img/Facebook.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.jpg'
import fiverr from '../../img/fiverr.png'
import './Works.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link} from 'react-scroll'
function Works() {
  const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;              
    const [rotateAngle, setRotateAngle] = useState(45);

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (event) => {
      animationFrameId = requestAnimationFrame(() => {
        const rotateX = (event.pageX / window.innerWidth) * 360;
        const rotateY = (event.pageY / window.innerHeight) * 360;
        setRotateAngle(rotateY);
      });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <div className='works'>
        <div className='awesome'>
            <span style={{color:darkMode?'white':''}}>All Skills and Tech</span>
            <span>I my good at!! </span>
            <span>
                I Had learn all this programming languages
                <br/>
                 and technologies which helps me to bulid
                <br/>
                  new projects and slove problems
            </span>
            <button className='button s-button'>Hire me</button>
            <div className="blur" style={{backgroundColor:'#c1f5ff',top:'10rem',width:'25rem',height:'15rem',left:'-2rem'}}></div>
        </div>
        <div className='w-right'>
        <motion.div
          initial={{ rotate: rotateAngle }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 1.5, type: "spring" }}
          className="w-mainCircle"
        >
            <div className='w-seccircle'>
              <img src={Upwork}/>
            </div>
            <div className='w-seccircle'>
              <img src={Facebook}/>
            </div>
            <div className='w-seccircle'>
              <img src={amazon}/>
            </div>
            <div className='w-seccircle'>
              <img src={fiverr}/>
            </div>
            <div className='w-seccircle'>
              <img src={shopify}/>
            </div>
          </motion.div>
          <div className='w-backcircle bluecircle'></div>
          <div className='w-backcircle yellowcircle'></div>
        </div>
      </div>
  )
}

export default Works