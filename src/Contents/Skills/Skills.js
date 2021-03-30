import React from 'react'
import s from './Skills.module.scss'
import Skill from "./Skill/Skill";
import react from '../../assets/icon/iconfinder_react_color_7423888.png'
import html from '../../assets/icon/iconfinder_html_169775.png'
import css from '../../assets/icon/iconfinder_sass_1297046.png'
import js from '../../assets/icon/iconfinder_js_282802.png'
import ts from '../../assets/icon/typescript.png'
import git from '../../assets/icon/git_plain_logo_icon_146507.png'


const Skills = () => {
    return (<>
            <h3 className={s.title}><span>&lt;</span>My Skills <span>/&gt;</span></h3>
            <div className={s.wrapper}>
                <Skill key='111' icon={react} title={'React'} description={['React/Redux','Thunk']}/>
                <Skill key='222'  icon={js} title={'JavaScript'} description={['JavaScript']}/>
                <Skill key='133311' icon={ts} title={'TypeScript'} description={['TypeScript']}/>
                <Skill key='12121' icon={html} title={'HTML'} description={['HTML, I work with semantic tag and provide modern feature']}/>
                {/*<Skill icon={css} title={'CSS/SCSS'}/>*/}
                {/*<Skill icon={git} title={'GIT'}/>*/}
            </div>
    </>


    )
}

export default Skills