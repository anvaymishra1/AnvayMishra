import React from 'react'

import   photo from './48328634.png';

import './About.css'

function About() {
    return (
        <div className = "About">
            <h1 className = "Heading">About</h1>
            <div >
                <img src = {photo} alt = "Anvay Mishra" className = "Logo"></img>
            </div>
            <p className = "About-Text">
                I am Anvay Mishra , a 3rd year Computer Science undergraduate student from Indian Institute of Information Technology Vadodara.
                I completed my school from National Public School Indore. I like to sing , play guitar and enjoy a game of cricket
            </p>
        </div>
    )
}

export default About
