import React from 'react'
import './Experience.css'
function Experience() {
  return (
    <div className='experience' id='Experience'>
        <div className='achivements'>
            <div className='circle'>290+</div>
            <span>LeetCode Pblms</span>
            <span>solved</span>
        </div>
        <div className='achivements'>
            <div className='circle'>5+</div>
            <span>Projects</span>
            <span>completed</span>
        </div>
        <div className='achivements'>
            <div className='circle'>15+</div>
            <span>Certifications</span>
            <span>Achieved</span>
        </div>
        <div className="blur" style={{backgroundColor:'rgb(238 210 255)',top:'87rem',width:'21rem',height:'11rem',left:'-10rem'}}></div>
        <div className="blur" style={{backgroundColor:'rgb(238 210 255)',top:'82rem',width:'21rem',height:'11rem',left:'40rem'}}></div>
    </div>
  )
}

export default Experience