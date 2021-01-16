import React , {useState} from "react";
import { Link } from "react-router-dom";
import Hamburger from "./hamburger/hamburger";

import "./sidebar.css";

// import Hamburger from '../Hamburger/hamburger';

function Sidebar() {
    const [state, setState] = useState(true);
    const [attachedClasses , setClasses] = useState(["Links"]);
    const [hamburgerClass, setHamburgerClass] = useState(["Hamburger-Container"])
    // let attachedClasses = ["Links"]
    const clickHandler = ()=>{
        console.log(state)
        setState(!state);
        if(state){
            setClasses(["Change"])
            setHamburgerClass(["Change"])
        }
        else{
            setClasses(["Links"])
            setHamburgerClass(["Hamburger-Container"])
        }
            
        // console.log(attachedClasses)
    }
    let hamburger = (
        <div
        className={hamburgerClass} onClick = {clickHandler}>
        <div className="Hamburger"></div>
        <div className="Hamburger"></div>
        <div className="Hamburger"></div>
    </div>
    )
    console.log(attachedClasses)
    return (
        <>
        {hamburger}
        {/* <Hamburger onClick = {clickHandler}></Hamburger> */}
        <ul className={attachedClasses}>
            <l1 className="Navbar-Links">
            <Link className = "Link-Component" to="/">Home</Link>
            </l1>
            <l1 className="Navbar-Links"><Link className = "Link-Component" to="/about">About</Link></l1>
            <l1 className="Navbar-Links"><Link className = "Link-Component" to="/projects">Projects</Link></l1>
            <l1 className="Navbar-Links"><Link className = "Link-Component" to="/contact">Contact</Link></l1>
        </ul>
        </>
    );
}

export default Sidebar;
