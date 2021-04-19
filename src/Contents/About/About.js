import React from 'react'
import s from './About.module.scss'
import my from '../../assets/img/my.jpg'
import {motion} from "framer-motion";
import Socials from "../../common/Socials/Socials";

const About = React.memo(({showHeader}) => {
    React.useEffect(() => {
        showHeader()
        return () => {
            showHeader()// при отключении копмоненты включаем Header
        }
    }, [showHeader])
    return (<>
            <h2>ABOUT <span className={s.title_highlight}>ME</span></h2>
            <div className={s.content}>
                <div className={s.wrapper}>
                    <div className={s.image__box}>
                        <img src={my} alt={my}/>
                    </div>
                    <div className={s.desc}>
                        <article>
                            Hi! I'm Nikitin Vova. I'm a web developer very passionate and dedicated to my work. With 1
                            years of experience as a web developer, I have acquired the skills and knowledge necessary for
                            the success of your project. I love every stage of the development process, so every day
                            I improve my knowledge and develop as a developer.
                        </article>
                        <Socials/>
                    </div>
                </div>
                <motion.button className={s.btn}
                               whileHover={{ scale: 1.05 }}
                               whileTap={{ scale: 0.9 }}
                >Download cv</motion.button>
            </div>
    </>



    )
})

export default About