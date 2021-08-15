import React from 'react';
import s from './Skill.module.scss';
// import {Fade} from "react-reveal";

export const Skill = ({skill, icon}) => {
    return (
        // <Fade cliar>
            <div className={s.skillWrapper}>
                <div className={s.skill}>
                    <div className={s.iconBox}>
                        <img className={s.icon} src={icon} alt='icon'/>
                    </div>
                    <div className={s.title}>
                        <h3>{skill}</h3>
                    </div>
                </div>
            </div>
        // </Fade>
    );
}
