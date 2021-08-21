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
        title: "Dream House",
        description: "",
        image: work1,
        link: "https://knakna.github.io/houseWP/"

    },
    {
        title: "Smoothie",
        description: "",
        image: work2,
        link: "https://knakna.github.io/Smoothie/"
    },
    {
        title: "New Providence",
        description: "",
        image: work3,
        link: "https://knakna.github.io/NewProvidence"
    },
    {
        title: "E-mail",
        description: "",
        image: work4,
        link: "https://knakna.github.io/e-mail/"
    },
    {
        title: "Hely Fly",
        description: "",
        image: work5,
        link: "https://knakna.github.io/Helyfly/"
    },
    {
        title: "Thrive Talk",
        description: "",
        image: work6,
        link: "https://knakna.github.io/ThriveTalk/"
    },
    {
        title: "WP Intensive",
        description: "",
        image: work7,
        link: "https://knakna.github.io/wordpress/"
    },
    {
        title: "Training Courses",
        description: "",
        image: work8,
        link: "https://knakna.github.io/openedu_courses/"
    },
    {
        title: "Coffee factory",
        description: "",
        image: work9,
        link: "https://knakna.github.io/Coffee_webflow/\n"
    },
    {
        title: "TestTask: Uni PRO",
        description: "",
        image: work10,
        link: "https://knakna.github.io/testTaskUniPRO/\n"
    },
    {
        title: "Online Shop",
        description: "",
        image: work11,
        link: ""
    },
    {
        title: "Card Training",
        description: "",
        image: work12,
        link: "https://fuza322.github.io/it-incubator-friday-project/"
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