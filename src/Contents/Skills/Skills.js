import React from 'react'
import s from './Skills.module.scss'
import Skill from "./Skill/Skill";
import {motion} from "framer-motion";
import react from '../../assets/icon/iconfinder_react_color_7423888.png'
import html from '../../assets/icon/iconfinder_html_169775.png'
import css from '../../assets/icon/iconfinder_sass_1297046.png'
import js from '../../assets/icon/iconfinder_js_282802.png'
import ts from '../../assets/icon/typescript.png'
import git from '../../assets/icon/git_plain_logo_icon_146507.png'

const state = [
    {skill: 'React', description: ['React/Redux','Thunk','Saga','Hooks'], icon: react},
    {skill: 'JavaScript', description: ['JavaScript','ES5/ES6'], icon: js},
    {skill: 'TypeScript', description: ['TypeScript'], icon: ts},
    {skill: 'HTML', description: ['HTML, I work with semantic tag and provide modern feature'], icon: html},
    {skill: 'CSS', description: ['CSS/SCSS'], icon: css},
    {skill: 'Git', description: ['GIT'], icon: git},
]




const Skills = () => {
    const skill = state.map((s,i) => <Skill
        key={i}
        icon={s.icon}
        title={s.skill}
        description={s.description}
        duration={i}
    /> )
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