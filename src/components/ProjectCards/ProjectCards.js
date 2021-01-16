import React,{useEffect, useState} from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
// import axios from '../../project-details'

import './ProjectCards.css'
import Loader from './Loader/Loader';

function ProjectCards() {
        const [state, setState] = useState(null);
        const [links, setLink] = useState(null);
        useEffect(() => {
            const fetchData = async () => {
            let res = await fetch(
                "https://fir-dbbb9-default-rtdb.firebaseio.com/Projects.json"
            );
            let json = await res.json();
            res = await fetch(
                "https://fir-dbbb9-default-rtdb.firebaseio.com/Links.json"
            );
            let links = await res.json();
            setState(json);
            setLink(links);
            };
            fetchData();
        }, []);
        // console.log(links)
        const renderData = () => {
            const projects = [];
            if (state !== null&& links!==null) {

                for (let i in state) 
                {
                    projects.push(
                        <ProjectCard name = {i} desc = {state[i]} links = {links[i]} >
                        </ProjectCard>
                    );
                }
                return projects;
            }
            else{
                console.log("Hello")
                return <Loader></Loader>;
            }
            };
            return (
                <div className = "Project-Cards">
                {renderData()}
            </div>
            // <Loader></Loader>
            )
    }
export default ProjectCards;
