import React from 'react'
import s from './Contacts.module.scss'

const Contacts = () => {
    return (<>
            <h3 className={s.title}>Contacts</h3>
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