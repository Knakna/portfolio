import React from 'react';
import s from './Projects.module.scss';
import {Project} from "./project/Project";
import icon1 from "../../assets/images/skills/svg/html5.svg"
// import {Fade} from "react-reveal";

const projects = [
    {
        title: "Smoothie",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: "",
        link: ""
    },
]


export const Projects = () => {
    return (
        <div className={s.projects} id={'skills'}>
            <div className={s.container}>
                <div className={s.inner}>
                    {/*<Fade clear>*/}
                    <h2 className={s.title}>projects</h2>
                    <div className={s.myprojects}>
                        {projects.map((project, index) => {
                            return (
                                <Project key={index} project={project}/>
                            )
                        })}
                    </div>
                    {/*</Fade>*/}
                </div>

            </div>
        </div>
    );
}