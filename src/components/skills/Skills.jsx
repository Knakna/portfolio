import React from 'react';
import s from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import icon1 from "../../assets/images/skills/svg/html5.svg"
// import {Fade} from "react-reveal";

const skils = [
    {
        title: "HTML5",
        icon: icon1
    },
    {
        title: "CSS3",
        icon: ""
    },
    {
        title: "SASS",
        icon: ""
    },
    {
        title: "CSS3",
        icon: ""
    },
    {
        title: "GULP",
        icon: ""
    },
    {
        title: "GIT",
        icon: ""
    },
]


export const Skills = () => {
    return (
        <div className={s.skills} id={'skills'}>
            <div className={s.container}>
                <div className={s.inner}>
                    {/*<Fade clear>*/}
                    <h2 className={s.title}>Skills</h2>
                    <div className={s.mySkills}>
                        {skils.map((skill, index) => {
                            return (
                                <Skill key={index} skill={skill.title} icon={skill.icon}/>
                            )
                        })}
                    </div>
                    {/*</Fade>*/}
                </div>

            </div>
        </div>
    );
}