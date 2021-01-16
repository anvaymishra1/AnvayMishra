import React from 'react'
import {SocialIcon} from 'react-social-icons';
import './footer.css'

function socialMediaIcons(props) {
    return (
        <>
            <li className = "Footer-List-Item">
                    <SocialIcon  url = {props.url}>{props.name}</SocialIcon>
            </li>
        </>
    )
}

export default socialMediaIcons
