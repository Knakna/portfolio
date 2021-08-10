import React from 'react';
import styles from './Skills.module.scss';
import {Skill} from "./Skill/Skill";
// import {Fade} from "react-reveal";

const skils = [
    {
        title: "HTML5",
        icon: ""
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
        <div className={styles.skills} id={'skills'}>
            <div className={styles.container}>
                {/*<Fade clear>*/}
                    <h3>Skills</h3>
                    <div className={styles.mySkills}>
                        {skils.map((skill, index) => {
                            return (
                                <Skill key={index} skill={skill.title} icon={skill.icon}/>
                            )
                        })}
                    </div>
                {/*</Fade>*/}
            </div>
        </div>
    );
}