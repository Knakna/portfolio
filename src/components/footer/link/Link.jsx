import React from 'react';
import s from './Link.module.scss';

export const  Link = ({link}) => {
    return (
        <div className={s.linkWrapper}>
            <a className={s.link} href={link.link}>{link.icon}</a>
        </div>
    );
}