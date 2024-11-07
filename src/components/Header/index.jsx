import styles from './style.module.css'

import EddieflixLogo from '../../imgs/eddieflix_logo.png'

export const Header = () => {
    return (
        <header>
            <img src={EddieflixLogo}></img>
            <div className={styles['footer-end']}></div>
        </header>
    );
}
