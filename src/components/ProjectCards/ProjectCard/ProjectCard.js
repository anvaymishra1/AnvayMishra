import React from 'react'

import SocialMediaIcons from'../../footer/socialMediaIcons'

import './ProjectCard.css'
function ProjectCard(props) {
    // console.log(props.links)
    return (
        <div className = "Project-Card">
            <h1 className = "Project-Title">{props.name}</h1>
            <p className = "Project-Text">{props.desc}</p>
            <SocialMediaIcons url = {props.links}></SocialMediaIcons>
        </div>
    )
}   

export default ProjectCard
