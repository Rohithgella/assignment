import Toggle from '../Toggle/Toggle';
import './navbar.css';
import React from "react";
import { Link } from 'react-scroll';
 const Navbar=()=>{
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    Rohith
                </div>
                <span>
                    <Toggle/>
                </span>
            </div>
            <div className="n-right">
                <div className="n-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'><li>Home</li></Link>
                    <Link spy={true} to='Service' smooth={true} activeClass='activeClass'><li>Strengths</li></Link>
                    <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'><li>Skills</li></Link>
                    <Link spy={true} to='Portifolio' smooth={true} activeClass='activeClass'><li>Portifolio</li></Link>
                    <Link spy={true} to='Testmonial' smooth={true} activeClass='activeClass'><li>Certifications</li></Link>
                </ul>
                </div>
                <Link spy={true} to='contact' smooth={true} activeClass='activeClass'><button className="button n-button">Contact</button></Link>
            </div>
            <div className="blur" style={{backgroundColor:'#c1f5ff',top:'13rem',width:'35rem',height:'21rem',left:'-5rem'}}></div>
        </div>
    )
 }
export default Navbar;