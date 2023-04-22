import React from "react";
import './intro.css';
import Floatingdiv from './Flowtingdiv.js'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { useContext } from 'react';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
function Intro() {
  const trans={duration:3,type:'spring'};
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="intro" id='Navbar'>
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode?'white':''}}>Hy!I Am</span>
          <span>Rohith Gella</span>
          <span>
            Fronted Developer with high level of knowledge in web desinging and
            development,producting Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <a href='https://github.com/Rohithgella'><img src={Github}/></a>
            <a href='https://www.linkedin.com/in/rohith-gella-933932251/'><img src={Linkedin}/></a>
            <a href='https://www.instagram.com/rohith.gella/'><img src={Instagram}/></a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1}/>
        <img src={Vector2}/>
        <img src={boy}/>
        <motion.img initial={{left:'-36%'}} whileInView={{left:'-24%'}} transcition={trans} src={glassesimoji}/>
        <motion.div initial={{ top: "-9%", left: "74%" }}
          whileInView={{ left: "73%" }}
          transition={trans}
          className="floating-div"
          style={{top:'-6%',left:'73%'}}>
            <Floatingdiv image={crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        <motion.div initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "1rem" }}
          transition={trans}
          className="floating-div"
          style={{top:'18rem',left:'1rem'}}>
            <Floatingdiv image={thumbup} txt1='Software' txt2='Developer'/>
        </motion.div>
        <div className="blur" style={{backgroundColor:'rgb(238 210 255)'}}></div>
        <div className="blur" style={{backgroundColor:'#c1f5ff',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  );
}
export default Intro;
