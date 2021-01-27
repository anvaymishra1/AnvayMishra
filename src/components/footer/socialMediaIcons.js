import React from 'react'
import {SocialIcon} from 'react-social-icons';
import './footer.css'

function socialMediaIcons(props) {
    return (
        <>
            <li className = "Footer-List-Item">
                    <SocialIcon bgColor = "#CF5C36" url = {props.url} target="_blank" rel="noopener noreferrer">{props.name}</SocialIcon>
            </li>
        </>
    )
}

export default socialMediaIcons
