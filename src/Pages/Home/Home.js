import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className = "Home">
            <p className = "Hello-Text one-second-animation">Hello! I am </p>
            <h1 className = "Big-Text three-second-animation">Anvay Mishra</h1>
            <h2 className = "Desciption-Text five-second-animation">A 3rd Year Undergraduate at IIIT Vadodara</h2>
            <h3 className = "Tech-Stack seven-second-animation">I have worked on various projects involving React.js, Flutter , Javascript and more.</h3>
            <a href = "mailto:anvaymishra5@gmail.com" >
            <button className = "Contact-Button nine-second-animation"> Email</button>
            </a>
        </div>
    )
}

export default Home
