import React, {useState} from "react"
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

    const [isShowMenu, setIsShowMenu] = useState(false);

    const showHideMenu = () => {
      setIsShowMenu(!isShowMenu)
    }

    const menuClass = isShowMenu ? s.nav + " " + s.menuActive : s.nav
    const burgerButtonClass =   isShowMenu   ? s.burgerMenuIcon + ' ' + s.active : s.burgerMenuIcon;
    return (
        <header id={"mainId"} className={s.header}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={menuClass}>
                        {headerItems.map((item, index) => {
                            return (
                                <Link key={index} activeClass="active" to={item.path} spy={true} smooth={true}
                                      duration={500}
                                      className={s.link} onClick={() => scroll.scrollToTop()}>{item.title}</Link>
                            )
                        })}
                    </div>

                    <div onClick={showHideMenu} className={s.burgerMenuWrapper}>
                        <div className={burgerButtonClass}> </div>
                    </div>

                </div>

            </div>
        </header>
    )
}