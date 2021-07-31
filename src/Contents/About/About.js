import React from 'react'
import s from './About.module.scss'
import my from '../../assets/img/other/my.jpg'
import {motion} from "framer-motion";
import Socials from "../../common/Socials/Socials";
import {Link} from "react-router-dom";
import resume from '../../assets/VLADIMIR_NIKITIN.pdf'

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
                            Hello, I am a person who is very into programming.
                            I have experience in creating SPA with React / Redux / TypeScript.
                            Now I am improving my skills in this direction and expanding them
                            with new technologies. I'm planing to learn React-native because
                            mobile development is very important these days. and I also want
                            to improve my English so that I can communicate freely and
                            understand the interlocutor.
                            I spend my free time developing as a web developer.
                        </article>
                        <div className={s.contacts__block}>
                            <Socials/>
                            <Link to='/contacts' className={s.btn}
                            >Contact me</Link>
                            <a href={resume} target='_blank' className={s.btn}
                            >Download cv</a>
                        </div>
                    </motion.div>
                </div>

            </div>
    </>
    )
})

export default About