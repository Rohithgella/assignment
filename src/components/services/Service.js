import React from 'react'
import './Services.css'
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Resume from './resume.pdf'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";
function Service() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const transition = {
        duration: 3,
        type: "spring",
      };
  return (
    <div className='services' id='Service'>
        <div className='awesome'>
            <span style={{color:darkMode?'white':''}}>My Awesome</span>
            <span>Skills!!</span>
            <span>
                I have very good skills which let me to complete
                <br/>
                the tasks in time and help to contribute for company
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Dowload CV</button></a>
        </div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
        </motion.div>
        <div  className='cards'>
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
         style={{left:'25rem'}}>
                <Card emoji={HeartEmoji} heading={'Programming'} details={'Good programming knowledge'}/>
            </motion.div>
            <motion.div initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition} style={{left:'2rem',top:'8rem'}}>
                <Card emoji={glasses} heading={'Developer'} details={'Can build use interactive websites'}/>
            </motion.div>
            <motion.div
         initial={{ top: "19rem", left: "25rem" }}
         whileInView={{ left: "12rem" }}
         transition={transition} style={{left:'18rem',top:'23rem'}}>
                <Card emoji={humble} heading={'Others'} details={'Can communicate  effectively'}/>
            </motion.div>
            <div className="blur" style={{backgroundColor:'#c1f5ff',top:'17rem',width:'21rem',height:'11rem',left:'19rem'}}></div>
            <div className="blur" style={{backgroundColor:'#c1f5ff',top:'25rem',width:'21rem',height:'11rem',left:'-23rem'}}></div>

        </div>
    </div>
  )
}

export default Service