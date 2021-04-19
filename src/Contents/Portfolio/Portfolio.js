import React from 'react'
import s from './Portfolio.module.scss'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {containerVariant} from "../Home/Home";
import {projectInfo} from "../../common/data/data";


const imgUrl = "https://image.freepik.com/free-vector/personal-portfolio-landing-page-template_156081-10.jpg"

const Portfolio = React.memo(({showHeader}) => {

    React.useEffect(() => {
        showHeader()
        return () => {
            showHeader()// при отключении копмоненты включаем Header
        }
    }, [showHeader])

    const items = projectInfo.map((pi, i) => <PortfolioItem
        key={pi.id + i} img={imgUrl}
        endPoint={pi.title}
        type={pi.type}/>
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

export const PortfolioItem = React.memo(({img, endPoint, type}) => {
    return (
        <div className={s.item}>
            <NavLink to={`/PortfolioInfo/${endPoint}`}>
                <img src={img} alt={endPoint}/>
                <div className={s.mirror}>
                    <i className={`${s.file} icon-file-text2`}/>
                    <p>{type}</p>
                    <i className={`${s.arrow} icon-arrow-right2`}/>
                </div>
            </NavLink>
        </div>
    )
})