import React from 'react'
import s from './About.module.scss'
import my from '../../assets/img/other/my.jpg'
import {motion} from "framer-motion";
import Socials from "../../common/Socials/Socials";
import {Link} from "react-router-dom";
import resume from '../../Resume.pdf'

const About = React.memo(() => {

    return (<>
            <motion.h2
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{type: "spring", stiffness: 30 }}

            >ABOUT <span className={s.title_highlight}>ME</span></motion.h2>
            <div className={s.content}>
                <div className={s.wrapper}>
                    <motion.div className={s.image__box}
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0}}
                                transition={{type: "spring", stiffness: 30 }}>
                        <img src={my} alt={my}/>
                    </motion.div>
                    <motion.div className={s.desc}
                                initial={{ opacity: 0, x: -400 }}
                                animate={{ opacity: 1, x: 0, transition: {delay: 0.4, duration: 0.5}}}
                                transition={{type: "spring", stiffness: 30 }}>
                        <article>
                            Hi! I'm Vova. I'm a front-end developer, very passionate and dedicated
                            to my work. Through continuous development, I have
                            acquired the skills and knowledge necessary to
                            accomplish the assigned tasks. I love every stage of the
                            development process, so every day I improve my
                            knowledge and develop as a developer

                        </article>
                        <div className={s.contacts__block}>
                            <Socials/>
                            <Link to='/contacts' className={s.btn}
                            >Contact me</Link>
                            <Link to={resume} target='_blank' className={s.btn}
                            >Download cv</Link>
                        </div>
                    </motion.div>
                </div>

            </div>
    </>
    )
})

export default About