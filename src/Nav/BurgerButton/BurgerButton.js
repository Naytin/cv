import React from 'react'
import s from './BurgerButton.module.scss'
import {motion} from "framer-motion";



const BurgerButton = React.memo(({set}) => {
    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const item = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: {delay: 0.5, duration: 1}},
    }
       return (<>
            <div className={s.burgerMenu} >
                <motion.div className={s.burger__btn} onClick={set}
                            initial="hidden"
                            animate="visible"
                            variants={list}>
                    <motion.span className={s.btnElem} variants={item}></motion.span>
                    <motion.span className={s.btnElem} variants={item}></motion.span>
                    <motion.span className={s.btnElem} variants={item}></motion.span>
                </motion.div>
            </div>

        </>
    )
})

export default BurgerButton