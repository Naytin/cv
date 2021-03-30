import React from 'react'
import s from './Portfolio.module.scss'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {containerVariant} from "../Home/Home";


const imgUrl = "https://image.freepik.com/free-vector/personal-portfolio-landing-page-template_156081-10.jpg"

const Portfolio = ({switchShow}) => {
    React.useEffect(() => {
        switchShow((state => !state))
        return () => {
            switchShow((state => !state))// при отключении копмоненты включаем Header
        }
    },[])

    const items = [1,2,3,4,5].map((a,i) => <PortfolioItem
        key={'Social-network' + i} img={imgUrl}
        endPoint={"Social-network"}/>)

    return (
        <motion.div className={s.wrapper}
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
}

export default Portfolio

export const PortfolioItem = ({img, endPoint}) => {
    return (
        <div className={s.item}>
            <NavLink to={`/PortfolioInfo/${endPoint}`}>
                <img src={img} alt={endPoint}/>
                <div className={s.mirror}>
                    click to see more...
                </div>
            </NavLink>
        </div>
    )
}