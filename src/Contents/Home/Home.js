import React from 'react'
import s from './Home.module.scss'
import {Link} from "react-router-dom";



const Home = () => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>NIKITIN VOVA</h2>
            <Link target='_blank'
                to={{pathname: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B8%D0%BD-4b573514a/'}}
                className='icon-linkedin'></Link>
        </div>
    )
}

export default Home