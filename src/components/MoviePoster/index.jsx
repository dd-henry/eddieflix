import styles from './style.module.css'

export const MoviePoster = ({imgUrl}) => {
    return (
            <div className={styles['movie-poster']} style={{ backgroundImage: `url(${imgUrl})` }}></div>
    )
}
