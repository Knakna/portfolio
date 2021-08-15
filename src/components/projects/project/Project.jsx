import React from 'react';
import s from './Project.module.scss';
// import {Fade} from "react-reveal";

export const Project = ({project}) => {
    return (
        // <Fade cliar>
            <div className={s.projectWrapper}>
                <div className={s.project}>
                    <div className={s.iconBox}>
                        <img className={s.icon} src={project.image} alt='icon'/>
                    </div>
                    <div className={s.title}>
                        <h3>{project.title}</h3>
                    </div>
                    <div className={s.description}>
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        // </Fade>
    );
}
