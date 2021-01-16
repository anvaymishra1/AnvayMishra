import React from 'react'
import SocialMediaIcons from '../../components/footer/socialMediaIcons'

import './Contact.css'

function Contact() {
    return (
        <div className = "Contact">
            <h1 className = "Contact-Heading">Get in Touch</h1>
            <p className = "Contact-Text">The following are the links to my various social media places where I can be contacted</p>
            <div className = "Social-Icon-Tray">
            <SocialMediaIcons url = "https://github.com/anvaymishra1"></SocialMediaIcons>
            <SocialMediaIcons url = "https://twitter.com/anvay10101"></SocialMediaIcons>
            <SocialMediaIcons url = "https://www.linkedin.com/in/anvaymishra/"></SocialMediaIcons>
            <SocialMediaIcons url = "mailto:anvaymishra5@gmail.com"></SocialMediaIcons>
            </div>
        </div>
    )
}

export default Contact
