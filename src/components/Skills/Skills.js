import React from 'react'
import './Skills.css';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/cvi.PNG';

const Skills = () => {
  return (
    <div className='skills-section'>
        <div className='About-section'>
            <h2>Who am I?</h2>
            <p>Am a Full-Stack Web developer :)</p>
            <span> (: I design interactive web applications using React & JavaScript</span>
            <h5>Available for Remote work & collaboration!!)</h5>
            <div className='bg-skills'>
            </div>
        </div>
        <div className='skills'>
            <h3>Projects</h3>
            <div className='project-row'>
            <div className='project-section'>
                <img src={project1} alt='project' />
            </div>
            <div className='project-section'>
                <img src={project1} alt='project' />
            </div>
            <div className='project-section'>
                <img src={project2} alt='project' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills