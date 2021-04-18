import React from 'react'
import s from './About.module.scss'
import my from '../../assets/img/my.jpg'
import {motion} from "framer-motion";

const About = () => {
    return (<>
            <h2>ABOUT ME</h2>
            <div className={s.content}>
                <div className={s.wrapper}>
                    <div className={s.image__box}>
                        <img src={my} alt={my}/>
                    </div>
                    <div className={s.desc}>
                        Hi! I'm Vova, I'm 33, I'm from Ukraine. I love to code every day, this is what I want to do.
                    </div>
                </div>
                <motion.button className={s.btn}
                               whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.9 }}
                >Download cv</motion.button>
            </div>
    </>



    )
}

export default About