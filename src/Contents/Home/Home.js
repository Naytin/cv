import React from 'react'
import s from './Home.module.scss'
import {motion} from "framer-motion";
import {PATH} from "../../Header/Header";

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
            <h2 className={s.title}>NIKITIN VLADIMIR</h2>
            <a target='_blank'
               rel='noreferrer'
               href={PATH.linkedin}
            >
                <motion.span className='icon-linkedin'
                             initial={{opacity: 0}}
                             animate={{scale: 2, opacity: 1, transition: {delay: 1, duration: 1}}}
                             transition={{duration: 0.5}}
                />
            </a>
        </motion.div>
    )
}

export default Home