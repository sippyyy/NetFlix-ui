
import clsx from "clsx"


import {useState} from 'react'
import style from './InfoMovie.module.scss'

const baseImgURL= process.env.REACT_APP_ORIGINAL_IMG

function InfoMovie({data}){



    return(
        <div className={clsx(style.wrapper)}>
            <div className={clsx(style.wrapperContainer)}>
                <img className={clsx(style.movieThumbnail)} src={`${baseImgURL}${data.backdrop_path}`}></img>
                
                <div className={clsx(style.container)}>
                    <div className={clsx(style.wrapperInfo)}>
                        <div className={clsx(style.Infomation)}>
                            
                            <div className={clsx(style.infoTags)}>
                                <p className={clsx(style.infoText,style.green)}>Popularity: {data.popularity}</p>
                                <p className={clsx(style.infoText)}>{data.release_date}</p>
                                <span className={clsx(style.TagAge)}>13+</span>
                                <p className={clsx(style.infoText)}>Vote count: {data.vote_count}</p>
                                <span className={clsx(style.TagQuality)}>HD</span>
                            </div>
                        
                        <div className={clsx(style.overview)}>
                            <span className={clsx(style.overviewPara)}>{data.overview}</span>
                        </div>
                        </div>
                        <div className={clsx(style.containerDetail)}>
                            <div className={clsx(style.detail)}>
                                <span className={clsx(style.key)}>Genres:</span>
                                <span className={clsx(style.value)}></span>
                            </div>
                            <div className={clsx(style.detail)}>
                                <span className={clsx(style.key)}>This movie is:</span>
                                <span className={clsx(style.value)}></span>
                            </div>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default InfoMovie