import clsx from 'clsx'
import style from './MovieBlock.module.scss'
import PreviewWindow from '../PreviewWindow';

const baseImgURL =  process.env.REACT_APP_ORIGINAL_IMG

function MovieBlock({movie}) {
    return ( 
        <div className={clsx(style.SliderBlock)}>
            <img className={clsx(style.SliderThumb)} src={`${baseImgURL}${movie.backdrop_path}`} alt="" />
            <div  className={clsx(style.SliderTags)}>
                <span className={clsx(style.SliderTag,style.SliderTagRed)}>new episode</span>
                <span className={clsx(style.SliderTag,style.SliderTagWhite)}>weekly</span>
            </div>
            <PreviewWindow thumb={movie} />
        </div>
     );
}

export default MovieBlock;