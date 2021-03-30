import React from 'react'
import s from './Contacts.module.scss'

const Contacts = () => {
    return (<>
            <h3 className={s.title}>Contacts</h3>
            <div className={s.wrapper}>
                <div className={s.block}>
                    <span className='icon-phone'> 093-551-44-74</span>
                </div>
                <div className={s.block}>
                    <span className='icon-envelope'> worlddesign1987@gmail.com</span>
                </div>
            </div>
        </>
    )
}

export default Contacts