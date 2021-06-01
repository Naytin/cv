import React from 'react'
import s from './Portfolio.module.scss'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {containerVariant} from "../Home/Home";
import {useSelector} from "react-redux";


const Portfolio = React.memo(() => {
    const projects = useSelector(state => state.projects.projects)
    const items = projects.map((pi, i) => <PortfolioItem
        key={pi.id + i}
        img={pi.images}
        endPoint={pi.title}
        type={pi.type}
        delay={i}/>
    )

    return (
        <motion.div
            variants={containerVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h3 className={s.title}>portfolio</h3>
            <section>
                <div className={s.wrapper}>
                    {items}
                </div>
            </section>
        </motion.div>
    )
})

export default Portfolio

export const PortfolioItem = React.memo(({img, endPoint, type, delay}) => {
    return (
        <motion.div className={s.item}
                    initial={{x: 500, opacity: 0}}
                    animate={{x: 0, opacity: 1, transition: {delay: `0.${delay}`, duration: 1}}}>
            <NavLink to={`/PortfolioInfo/${endPoint}`}>
                <img src={img[0]} alt={endPoint}/>
                <div className={s.mirror}>
                    <i className={`${s.file} icon-file-text2`}/>
                    <p>{type}</p>
                    <i className={`${s.arrow} icon-arrow-right2`}/>
                </div>
            </NavLink>
        </motion.div>
    )
})