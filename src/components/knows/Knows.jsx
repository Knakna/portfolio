import React from 'react';
import s from './Knows.module.scss';
import {Know} from "./know/Know";

import iconMUI from "../../assets/images/skills/material.svg";
import iconWebflow from "../../assets/images/skills/webflow.svg";
import iconWP from "../../assets/images/skills/wordpress.svg";
import iconBootstrap from "../../assets/images/skills/bootstrap.svg";
import iconJS from "../../assets/images/skills/js.svg";

// import {Fade} from "react-reveal";

const skils = [

    {
        title: "MUI",
        icon: iconMUI
    },
    {
        title: "Webflow",
        icon: iconWebflow
    },
    {
        title: "Wordpress",
        icon: iconWP
    },
    {
        title: "Bootstrap",
        icon: iconBootstrap
    },
    {
        title: "JS",
        icon: iconJS
    },

]


export const Knows = () => {
    return (
        <div className={s.skills} id={'skills'}>
            <div className={s.container}>
                <div className={s.inner}>
                    {/*<Fade clear>*/}
                    <h2 className={s.title}>Basic knowledge</h2>
                    <div className={s.mySkills}>
                        {skils.map((skill, index) => {
                            return (
                                <Know key={index} skill={skill.title} icon={skill.icon}/>
                            )
                        })}
                    </div>
                    {/*</Fade>*/}
                </div>

            </div>
        </div>
    );
}