import {memo} from 'react'
import clsx from "clsx"

import style from './BasicInfo.module.scss'


function BasicInfo({data,genres,info}) {
    return ( 
        <div className={clsx(style.wrapperInfo)}>
        <div className={clsx(style.Information)}>
            
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
                <span className={clsx(style.value)}>{genres}</span>
            </div>
            <div className={clsx(style.detail)}>
                <span className={clsx(style.key)}>Comment:</span>
                <span className={clsx(style.value)}>{info.tagline}</span>
            </div>
        </div>
    </div>
     );
}

export default memo(BasicInfo);