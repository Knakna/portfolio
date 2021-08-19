import React from 'react';
import s from './Projects.module.scss';
import {Project} from "./project/Project";
import work1 from "../../assets/images/projects/work-1.jpg"
import work2 from "../../assets/images/projects/work-2.jpg"
import work3 from "../../assets/images/projects/work-3.jpg"
import work4 from "../../assets/images/projects/work-4.jpg"
import work5 from "../../assets/images/projects/work-5.jpg"
import work6 from "../../assets/images/projects/work-6.jpg"
import work7 from "../../assets/images/projects/work-7.jpg"
import work8 from "../../assets/images/projects/work-8.jpg"
import work9 from "../../assets/images/projects/work-9.jpg"
import work10 from "../../assets/images/projects/work-10.jpg"
import work11 from "../../assets/images/projects/work-11.jpg"
import work12 from "../../assets/images/projects/work-12.jpg"
// import {Fade} from "react-reveal";

const projects = [
    {
        title: "Smoothie",
        description: "",
        image: work1,
        link: ""

    },
    {
        title: "Smoothie",
        description: "",
        image: work2,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work3,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work4,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work5,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work6,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work7,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work8,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work9,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work10,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work11,
        link: ""
    },
    {
        title: "Smoothie",
        description: "",
        image: work12,
        link: ""
    },

]


export const Projects = () => {
    return (
        <div className={s.projects} id={'skills'}>
            <div className={s.container}>
                <h2 className={s.title}>Projects</h2>

                <div className={s.inner}>
                    {/*<Fade clear>*/}
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