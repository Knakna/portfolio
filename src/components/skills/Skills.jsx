import React from 'react';
import s from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import iconHtml from "../../assets/images/skills/html.svg"
import iconCss from "../../assets/images/skills/css3.svg";
import iconSaas from "../../assets/images/skills/saas.svg";
import iconLess from "../../assets/images/skills/less.svg";
import iconGulp from "../../assets/images/skills/gulp.svg";
import iconGit from "../../assets/images/skills/git.svg";
import iconTeam from "../../assets/images/skills/teamwork.svg";
import iconBEM from "../../assets/images/skills/bem.svg";
import iconReact from "../../assets/images/skills/react.svg";

import iconMF from "../../assets/images/skills/mobile.svg";
import iconPP from "../../assets/images/skills/pixel.svg";

// import {Fade} from "react-reveal";

const skils = [
    {
        title: "HTML5",
        icon: iconHtml
    },
    {
        title: "CSS3",
        icon: iconCss
    },
    {
        title: "SASS",
        icon: iconSaas
    },
    {
        title: "LESS",
        icon: iconLess
    },
    {
        title: "GULP",
        icon: iconGulp
    },
    {
        title: "GIT",
        icon: iconGit
    },
    {
        title: "Team work",
        icon: iconTeam
    },
    {
        title: "BEM",
        icon: iconBEM
    },
    {
        title: "Code to React",
        icon: iconReact
    },

    {
        title: "Mobile first",
        icon: iconMF
    },
    {
        title: "Pixel Perfect",
        icon: iconPP
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