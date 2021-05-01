import React from 'react'
import s from './Contacts.module.scss'
import {motion} from "framer-motion"
import {containerVariant} from "../Portfolio/PortfolioInfo/PortfolioInfo"

const Contacts = () => {
    return (<>
            <motion.h3 className={s.title}
                       variants={containerVariant}
                       initial='hidden'
                       animate='visible'
            >Contacts</motion.h3>
            <div className={s.wrapper}>
                <div className={s.contacts}>
                    <p>. . .</p>
                    <p><i className='icon-phone'></i> 093-551-44-74</p>
                    <p><i className='icon-envelope'></i> worlddesign1987@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Contacts