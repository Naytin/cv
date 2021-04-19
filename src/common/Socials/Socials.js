import s from './Socials.module.scss'
import {Link} from "react-router-dom";

const PATH = {
    linkedin: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B8%D0%BD-4b573514a/',
    git: 'https://github.com/Naytin',
}

const Socials = () => {
    return <div className={s.socials}>
        <Link target='_blank' to={{pathname: PATH.git}} className='icon-git'/>
        <Link target='_blank'
              to={{pathname: PATH.linkedin}}
              className='icon-linkedin'/>
    </div>
}

export default Socials