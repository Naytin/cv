import React from 'react'
import s from './Header.module.scss'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const PATH = {
    linkedin: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B8%D0%BD-4b573514a/',
    git: 'https://github.com/Naytin',
    avatar: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg"
}

const Header = () => {
    return (
        <motion.header className={s.header}
                       initial={{x: -400, opacity: 0}}
                       animate={{x: 0, opacity: 1, transition: {duration: 1.4}}}
        >
            <div className={s.content}>
                <Link to='/Home'>
                    <img
                        src={PATH.avatar}
                        alt={PATH.avatar}/>
                </Link>
                <div className={s.title}>
                    <h2>NIKITIN VOVA</h2>
                    <span>Front-End Developer</span>
                    <div className={s.socials}>
                        <Link target='_blank' to={{pathname: PATH.git}} className='icon-git'/>
                        <Link target='_blank'
                              to={{pathname: PATH.linkedin}}
                              className='icon-linkedin'/>
                        <Link to=''/>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default Header