import React from 'react';
import s from './Footer.module.scss';
import {Link} from "./link/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
// import {Fade} from "react-reveal";


export const Footer = () => {

    const phone = <FontAwesomeIcon icon={faPhone}/>;
    const github = <FontAwesomeIcon icon={faGithub}/>;
    const linkedin = <FontAwesomeIcon icon={faLinkedinIn}/>;
    const telegram = <FontAwesomeIcon icon={faTelegramPlane}/>;
    const email = <FontAwesomeIcon icon={faEnvelope}/>;
    const location = <FontAwesomeIcon icon={faMapMarkerAlt}/>;


    const links = [

        {
            icon: github,
            link: ""
        },
        {
            icon: linkedin,
            link: ""
        },
        {
            icon: telegram,
            link: ""
        },
        {
            icon: email,
            link: ""
        },
        {
            icon: location,
            link: ""
        },
        {
            icon: phone,
            link: ""
        },
    ]


    return (
        <div className={s.footer}>
            <div className={s.container}>
                {/*<Fade clear>*/}
                    <div className={s.title}>
                        <h2>Contacts</h2>
                    </div>
                    <div className={s.myLinks}>
                        {links.map((link, index) => {
                            return <Link key={index} link={link}/>
                        })}
                    </div>
                    <div className={s.copyright}>
                        <p>© 2021 All Rights Reserved </p>
                    </div>
                {/*</Fade>*/}
            </div>

        </div>
    );
}
