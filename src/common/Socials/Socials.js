import s from './Socials.module.scss'
import {Link} from "react-router-dom";

const PATH = {
    linkedin: 'www.linkedin.com/in/v-nikitin',
    git: 'https://github.com/Naytin',

}

const Socials = () => {
    return <div className={s.socials}>
        <Link target='_blank' to={{pathname: PATH.git}} className='icon-git'/>
        <Link target='_blank' to={{pathname: PATH.linkedin}} className='icon-linkedin'/>
    </div>
}

export default Socials