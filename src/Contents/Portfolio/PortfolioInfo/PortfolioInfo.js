import React from 'react'
import {NavLink} from "react-router-dom";
import s from './PortfolioInfo.module.scss'


const PortfolioInfo = () => {
    return (<>
            <div className={s.wrapper}>
                <NavLink to='/Portfolio' className={s.backToPortfolio}>
                    <div className='icon-arrow-left2'></div>
                </NavLink>
                <h4 className={s.title}>Details</h4>
                <p>will by soon...</p>
            </div>

    </>


    )

}

export default PortfolioInfo