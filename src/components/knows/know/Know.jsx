import React from 'react';
import s from './Know.module.scss';
// import {Fade} from "react-reveal";

export const Know = ({skill, icon}) => {
    return (
        // <Fade cliar>
            <div className={s.slill}>
                <div className={s.inner}>
                    <div className={s.iconBox}>
                        <img className={s.icon} src={icon} alt='icon'/>
                    </div>
                    {/*<div className={s.title}>*/}

                    {/*</div>*/}

                </div>
                <h3 className={s.title}>{skill}</h3>
            </div>
        // </Fade>
    );
}
