import React from 'react';
import styles from './Footer.module.scss';
import {Link} from "./link/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
// import {Fade} from "react-reveal";


export const Footer = () => {

    const phone = <FontAwesomeIcon icon={faPhone}/>;
    const github = <FontAwesomeIcon icon={faGithub}/>;
    const linkedin = <FontAwesomeIcon icon={faLinkedinIn}/>;
    const telegram = <FontAwesomeIcon icon={faTelegramPlane}/>;

    const links = [
        {
            icon: phone,
            link: ""
        },
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
    ]


    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                {/*<Fade clear>*/}
                    <div className={styles.footerTitle}>
                        <h2>Natallia Kulikova</h2>
                    </div>
                    <div className={styles.myLinks}>
                        {links.map((link, index) => {
                            return <Link key={index} link={link}/>
                        })}
                    </div>
                    <div className={styles.copyright}>
                        <p>© 2021 Все права защищены </p>
                    </div>
                {/*</Fade>*/}
            </div>

        </div>
    );
}
