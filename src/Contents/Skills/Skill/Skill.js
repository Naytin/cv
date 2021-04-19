import React from 'react'
import s from './Skill.module.scss'

const Skill = ({icon,title, description, ...props}) => {
    const desc = description.map((d, i ) => <div key={i}>&#8226; {d} </div>)
    return (<>
            <div className={s.wrapper}>
                <div  className={s.card}>
                    <img src={icon} alt="" className="icon"/>
                    <div className={s.technology}>{title}</div>
                </div>
                <div className={s.info}>
                    { desc}
                </div>
            </div>
    </>
    )
}

export default Skill