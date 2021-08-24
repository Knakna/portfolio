import React from 'react';
import s from './Main.module.scss';
import photo from '../../assets/images/header/burgerIcon.svg'

export const Main = () => {
    return (
        <div className={s.main} id={'main'}>
            <div className={s.container}>
                <div className={s.wrap}>
                    <div className={s.inner}>
                        <div className={s.content}>
                            <span className={s.greeting}>Hi! My name is</span>
                            {/*<h1 className={s.name}>Natallia Kulikova</h1>*/}

                            <span className={s.career}>I am HTML/CSS developer</span>
                        </div>
                        <div className={s.photo}>
                            <img className={s.myPhoto}
                                 src={photo}
                                 alt='myPhoto'/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

