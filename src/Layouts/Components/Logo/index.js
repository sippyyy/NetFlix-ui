
import clsx from 'clsx'


import logoNetflix from '~/img/netflix-icon.png'
import style from './Logo.module.scss'



function Logo() {
    return ( 
        <div className={clsx(style.wrapper)}>
            <img className={clsx(style.logo)} alt="Netflix" src={logoNetflix} />
        </div>
     );
}

export default Logo;