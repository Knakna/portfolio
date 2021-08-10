import React from "react"
import s from "./Header.module.scss"
import {Link, animateScroll as scroll} from "react-scroll";

const headerItems = [
    {
        title: "Main",
        path: "main"
    },
    {
        title: "Skills",
        path: "skills"
    },
    {
        title: "Projects",
        path: "projects"
    },
    {
        title: "Contacts",
        path: "contacts"
    },
]

export function Header() {
    return (
        <header id={"mainId"} className={s.headerBlock}>
            <div className={s.headerContainer}>
                <div className={s.header}>
                    {headerItems.map((item, index) => {
                        return (
                            <Link key={index} activeClass="active" to={item.path} spy={true} smooth={true} duration={500}
                                  className={s.link} onClick={() => scroll.scrollToTop()}>{item.title}</Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}