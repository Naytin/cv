import React from 'react'
import s from './Skill.module.scss'
import {motion} from "framer-motion";

const Skill = ({icon,title, description, ...props}) => {
    const desc = description.map((d, i ) => <div key={i}>&#8226; {d} </div>)

    return (<>
            <motion.div className={s.wrapper}
                        initial={{x: 500, opacity: 0}}
                        animate={{x: 0, opacity: 1, transition: {delay: `0.${props.delay}`, duration: 1}}}
            >
                <div  className={s.card}>
                    <img src={icon} alt="" className="icon"/>
                    <div className={s.technology}>{title}</div>
                </div>
                <div className={s.info}>
                    {desc}
                </div>
            </motion.div>
    </>
    )
}

export default Skill