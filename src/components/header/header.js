import React from 'react'
import Sidebar from '../sidebar/sidebar'
import './header.css'

function Header() {
    return (
        <div className = "Header">
            <header >
                <Sidebar></Sidebar>
            </header>
        </div>
    )
}

export default Header
