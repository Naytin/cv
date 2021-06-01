import React from 'react'
import s from './Skills.module.scss'
import Skill from "./Skill/Skill";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";

const Skills = () => {
    const skills = useSelector(state => state.skills.skills)

    const skill = skills.map((s, i) => <Skill
        key={i}
        icon={s.icon}
        title={s.skill}
        description={s.description}
        delay={i}
    />)
    return (<>
            <motion.h3 className={s.title}
                       initial={{y: -100, opacity: 0}}
                       animate={{y: 0, opacity: 1, transition: {delay: 0.5, duration: 1.5}}}
            >&lt;<span>My</span> Skills/&gt;</motion.h3>
            <div className={s.wrapper}>
                {skill}
            </div>
        </>
    )
}

export default Skills