import React from 'react'
import s from './Home.module.scss'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

export const containerVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {delay: 0.5, duration: 1.5}
    },
}

const Home = () => {
    return (
        <motion.div className={s.wrapper}
                    variants={containerVariant}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
        >
            <h2 className={s.title}>NIKITIN VOVA</h2>
            <Link target='_blank'
                  to={{pathname: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B8%D0%BD-4b573514a/'}}
            ><motion.span className='icon-linkedin'
                          initial={{ opacity: 0 }}
                          animate={{ scale: 2, opacity: 1, transition: {delay: 1, duration: 1}}}
                          transition={{ duration: 0.5 }}
            /></Link>
        </motion.div>

    )
}

export default Home