import React from 'react';
import s from './Main.module.scss';
import photo from '../../assets/images/photo/mainPhoto.jpg'

export const Main = () => {
    return (
        <div className={s.main} id={'main'}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <p>Hi!</p>
                    <div className={s.name}>
                        <p>My name is</p>
                        <span>Natallia</span><span>Kulikova</span>
                    </div>
                    <h1>I am HTML/CSS developer</h1>
                </div>
                <div className={s.photo}>
                    <img className={s.myPhoto}
                         src={photo}
                         alt='myPhoto'/>
                </div>
            </div>
        </div>
    );
}

