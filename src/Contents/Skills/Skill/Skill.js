import React from 'react'
import s from './Skill.module.scss'

const Skill = ({icon,title, description}) => {
    let [active, setActive] = React.useState(false)

    const desc = description.map((d, i ) => <><p key={i}>&#8226; {d} </p><br/></>)
    return (<>
            <div className={s.wrapper}>
                <div onClick={(e) => setActive(!active)} className={s.card}>
                    <img src={icon} alt="" className="icon"/>
                    <div className={s.technology}>{title}</div>
                </div>
                <div className={s.info}>
                    {desc}
                </div>
            </div>

    </>
    )
}

export default Skill