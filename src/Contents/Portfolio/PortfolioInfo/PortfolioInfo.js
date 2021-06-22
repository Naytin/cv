import React from 'react'
import {NavLink} from "react-router-dom";
import s from './PortfolioInfo.module.scss'
import {Slider} from "./Slider/Slider";
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

const PortfolioInfo = React.memo((props) => {

    return (<>
            <div className={s.wrapper}>
                <NavLink to='/Portfolio' className={`${s.backToPortfolio} icon-arrow-left2`}/>
                {<p>will by soon...</p> && <Details data={props.data}/>}
            </div>
        </>
    )
})

export default PortfolioInfo

const Details = ({data}) => {
    return <motion.div className={s.details__wrapper}
                variants={containerVariant}
                initial='hidden'
                animate='visible'
                exit='exit'>
        <h5 className={s.title}>{data.title}</h5>
        <div className={s.project__wrapper}>
            <div className={s.slider__wrapper}>
                <Slider images={data.images}/>
            </div>
            <div className={s.details__info}>
                <p className={s.details__title}>Project info:</p>
                <article>
                    {data.des}
                </article>
                <p className={s.details__title}>Technologies:</p>
                <article>
                    {data.technologies.map(t => <p key={t}>&emsp;&#8226; {t}</p>)}
                </article>
                <p className={s.details__title}>
                    Date of creation: {data.date}</p>
                <p className={s.details__title}>URL:&emsp;
                    <NavLink target='_blank' to={{pathname: data.url}}>{data.url}</NavLink>
                </p>
                <p className={s.details__title}>Share: </p>
            </div>
        </div>
    </motion.div>;
}

