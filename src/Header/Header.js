import React from 'react'
import s from './Header.module.scss'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Socials from "../common/Socials/Socials";

export const PATH = {
    linkedin: 'https://www.linkedin.com/in/volodymyrnikitin/',
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
                    <h2>NIKITIN VLADIMIR</h2>
                    <span>Front-End Developer</span>

                    <Socials/>
                </div>
            </div>
        </motion.header>
    )
}

export default Header