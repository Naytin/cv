import s from './Socials.module.scss'
import {PATH} from "../../Header/Header";



const Socials = () => {
    return <div className={s.socials}>
        <a target='_blank' rel='noreferrer' href={PATH.git} className='icon-git'/>
        <a target='_blank' rel='noreferrer' href={PATH.linkedin} className='icon-linkedin'/>
    </div>
}

export default Socials