import React from 'react'
import s from './Portfolio.module.scss'
import {NavLink} from "react-router-dom";


const Portfolio = () => {
    return (
        <>
            <h3 className={s.title}>portfolio</h3>
            <section>
                <div className={s.wrapper}>
                    <div className={s.item}>
                        <NavLink to='/PortfolioInfo/Social-network'>
                            <img src="https://image.freepik.com/free-vector/personal-portfolio-landing-page-template_156081-10.jpg" alt="Social-network"/>
                            <div className={s.mirror}>
                                click to see more...
                            </div>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/PortfolioInfo/Todo'>
                            <img src="https://image.freepik.com/free-vector/personal-portfolio-landing-page-template_156081-10.jpg" alt="Todo"/>
                            <div className={s.mirror}>
                                click to see more...
                            </div>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/PortfolioInfo/Dentistry'>
                            <img src="https://image.freepik.com/free-vector/personal-portfolio-landing-page-template_156081-10.jpg" alt="Dentistry"/>
                            <div className={s.mirror}>
                                click to see more...
                            </div>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/PortfolioInfo/Social-network'>
                            <img src="https://image.freepik.com/free-vector/personal-portfolio-landing-page-template_156081-10.jpg" alt="logo"/>
                            <div className={s.mirror}>
                                click to see more...
                            </div>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/PortfolioInfo/Social-network'>
                            <img src="https://image.freepik.com/free-vector/personal-portfolio-landing-page-template_156081-10.jpg" alt="logo"/>
                            <div className={s.mirror}>
                                click to see more...
                            </div>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Portfolio