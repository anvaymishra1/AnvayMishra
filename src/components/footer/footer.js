import React from 'react'
import './footer.css'
import SocialMediaIcons from "./socialMediaIcons";

function footer() {
    return (
        <footer>
            <ul className = "Footer-List">
                {/* <h1>Anvay Mishra</h1> */}
                <SocialMediaIcons url = "https://github.com/anvaymishra1" name = "Github"></SocialMediaIcons>
                <SocialMediaIcons url = "https://www.linkedin.com/in/anvaymishra/" name = "LinkedIn"></SocialMediaIcons>
                <SocialMediaIcons url = "https://twitter.com/anvay10101" name = "Twitter"></SocialMediaIcons>
            </ul>
        </footer>
    )
}

export default footer
