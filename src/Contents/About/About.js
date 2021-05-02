import React from 'react'
import s from './About.module.scss'
import my from '../../assets/img/my.jpg'
import {motion} from "framer-motion";
import Socials from "../../common/Socials/Socials";
import {Link} from "react-router-dom";

const About = React.memo(({showHeader}) => {
    React.useEffect(() => {
        showHeader()
        return () => {
            showHeader()// при отключении копмоненты включаем Header
        }
    }, [showHeader])
    return (<>
            <motion.h2
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{type: "spring", stiffness: 30 }}
                // initial={{y: -100, opacity: 0}}
                // animate={{y: 0, opacity: 1, transition: {delay: 0.5, duration: 1.5}}}
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
                            Hi! I'm Vova. I'm a Front End Developer very passionate and dedicated to my work. With 1
                            years of experience as a web developer, I have acquired the skills and knowledge necessary for
                            the success of your project. I love every stage of the development process, so every day
                            I improve my knowledge and develop as a developer.
                        </article>
                        <div className={s.contacts__block}>
                            <Socials/>
                            <Link to='' target="_blank" className={s.btn}
                            >Contact me</Link>
                            <Link className={s.btn}
                            >Download cv</Link>
                        </div>
                    </motion.div>
                </div>

            </div>
    </>



    )
})

export default About