import React from 'react'
import './hamburger.css'
function hamburger() {
    return (
        <div className = "Wrapper">
        <div id="menuToggle">
        <input type="checkbox" />
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
    </div>
    </div>
    )
}

export default hamburger
