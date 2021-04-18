import React from 'react'
import s from './Skill.module.scss'
import {motion} from "framer-motion";

const Skill = ({icon,title, description, ...props}) => {
    const [isOpen, setIsopen] = React.useState(false)
    const isOpen2 = props.i === props.expanded;
    console.log(isOpen2)
    const openHandler = () => {
        setIsopen(state => !state)
        props.setExpanded(isOpen2 ? false : props.i)
    }


    const desc = description.map((d, i ) => <div key={i}>&#8226; {d} </div>)
    return (<>
            <div className={s.wrapper}>
                <div  className={s.card}>
                    <img src={icon} alt="" className="icon"/>
                    <div className={s.technology}>{title}</div>
                </div>
                <motion.div className={s.info}
                     initial={false}
                     // animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF", transition: {duration: 1}}}
                     onClick={openHandler}>
                    {!!isOpen2 ? <div className={s.description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, ad corporis debitis delectus dignissimos
                        ea enim impedit incidunt inventore iusto minus neque nostrum omnis praesentium quibusdam sapiente? Alias aliquam aliquid aperiam architecto commodi
                        dicta eius error officia, optio perferendis placeat porro quidem quisquam, quo recusandae velit voluptatibus. Fuga, quis?ea enim impedit incidunt inventore iusto minus neque nostrum omnis praesentium quibusdam sapiente? Alias aliquam aliquid aperiam architecto commodi
                        dicta eius error officia, optio perferendis placeat porro quidem quisquam, quo recusandae velit voluptatibus. Fuga, quis?
                    </div>
                    : desc}
                </motion.div>
            </div>

    </>
    )
}

export default Skill