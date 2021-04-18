import React, {useState, useEffect}from 'react'
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import BurgerButton from "./BurgerButton/BurgerButton";
import {motion} from "framer-motion";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [open, set] = useState(true)

    useEffect(() => {
        let width = document.body.clientWidth
        if(width < '768') {
            setIsOpen(false)
        }
    },[])

    const isOpenHandler = React.useCallback(() => {
        set((state) => !state)
        setIsOpen((state) => !state)
    },[])
    const closeMenuHandler = (e) => {
        if(e.view.innerWidth < 768) {
            setIsOpen(!isOpen)
            set(!open)
        }
    }

    return (
        <motion.nav
            initial={{x: -40, opacity: 0}}
            animate={{x: 0, opacity: 1, transition: {duration: 1}}}
        >
            <BurgerButton set={isOpenHandler} open={open} />
            {isOpen && <motion.ul className={` ${isOpen ? s.list + ' active' : s.list} `}
                                  initial={{y: -200, opacity: 0,}}
                                  animate={{y: 0, opacity: 1, transition: {delay: 0.5, duration: 0.7}}}
            >
                <NavLink to='/Home' onClick={closeMenuHandler}
                ><span className={`${s.icon} icon-home`}></span><span className={s.item}>HOME</span></NavLink>
                <NavLink to='/Skills' onClick={closeMenuHandler}><span className={`${s.icon} icon-embed2`}></span><span
                    className={s.item}>SKILLS</span></NavLink>
                <NavLink to='/About' onClick={closeMenuHandler}><span className={`${s.icon} icon-user-secret`}></span><span className={s.item}>ABOUT ME</span></NavLink>
                <NavLink to='/Portfolio' onClick={closeMenuHandler}><span className={`${s.icon} icon-monitor`}></span><span
                    className={s.item}>PORTFOLIO</span></NavLink>
                {/*<NavLink to='/Blog' onClick={closeMenuHandler}><span className={`${s.icon} icon-book`}></span><span className={s.item}>BLOG</span></NavLink>*/}
                <NavLink to='/Contacts' onClick={closeMenuHandler}><span className={`${s.icon} icon-phone`}></span><span
                    className={s.item}>CONTACTS</span></NavLink>
            </motion.ul>}
        </motion.nav>
    )
}

export default Nav