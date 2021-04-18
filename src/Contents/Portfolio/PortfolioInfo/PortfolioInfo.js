import React from 'react'
import {NavLink} from "react-router-dom";
import s from './PortfolioInfo.module.scss'
import {Slider} from "./Slider/Slider";


const PortfolioInfo = React.memo(({showHeader, data}) => {
    React.useEffect(() => {
        showHeader()
        return () => {
            showHeader()// при отключении копмоненты включаем Header
        }
    }, [showHeader])
    return (<>
            <div className={s.wrapper}>
                <NavLink to='/Portfolio' className={`${s.backToPortfolio} icon-arrow-left2`}/>
                {/*<h4 className={s.title}>Details</h4>*/}
                {<p>will by soon...</p> && <Details data={data}/>}
            </div>
        </>
    )
})

export default PortfolioInfo

const Details = ({data}) => {
    return <div className={s.details__wrapper}>
        <h5 className={s.title}>{data.title}</h5>
        <div className={s.project__wrapper}>
            <div className={s.slider__wrapper}>
                <Slider images={data.images}/>
            </div>
            <div className={s.details__info}>
                <h6 className={s.details__title}>Project info:</h6>
                <article>
                    {data.des}
                </article>
                <h6 className={s.details__title}>Technologies:</h6>
                <article>
                    {data.technologies.map(t => <p key={t}>&emsp;&#8226; {t}</p>)}
                </article>
                <h6 className={s.details__title}>URL:
                    <a target='_blank' href={data.url}>{data.url}</a>
                </h6>
                <h6 className={s.details__title}>Share: </h6>
            </div>
        </div>
    </div>;
}

