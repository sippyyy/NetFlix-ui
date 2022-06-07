import clsx from 'clsx'
import style from './MovieBlock.module.scss'
import PreviewWindow from '../PreviewWindow';

const baseImgURL =  'https://image.tmdb.org/t/p/original'

function MovieBlock({movie}) {
    return ( 
        <div className={clsx(style.SliderBlock)}>
            {(movie.backdrop_path === null || movie.backdrop_path === undefined) && <img className={clsx(style.SliderThumb)} src="https://i.ytimg.com/vi/kDzCXYU93kg/maxresdefault.jpg" alt="" />}
            {movie.backdrop_path && <img className={clsx(style.SliderThumb)} src={`${baseImgURL}${movie.backdrop_path}`} alt="" />}
            <div  className={clsx(style.SliderTags)}>
                <span className={clsx(style.SliderTag,style.SliderTagRed)}>new episode</span>
                <span className={clsx(style.SliderTag,style.SliderTagWhite)}>weekly</span>
            </div>
            <PreviewWindow thumb={movie} />
        </div>
     );
}

export default MovieBlock;