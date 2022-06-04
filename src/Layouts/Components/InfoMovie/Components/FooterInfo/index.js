
import {useEffect,useState,memo} from 'react'
import clsx from 'clsx'
import style from './FooterInfo.module.scss'


function FooterInfo({data,genre,info}){
    const [companies,setCompanies] =useState('')
    useEffect(()=>{
        if(info.id){
            let list = []
            info.production_companies.forEach(e=>{
                const result = e.name
                list.push(result)
                setCompanies(list.toString())
            })
        }
    },[info])
    return(
        <div className={clsx(style.wrapper)}>
            <div  className={clsx(style.titleWapper)}>
                <span className={clsx(style.title)}>About</span>
                <h3 className={clsx(style.movieName)}>{data.title}</h3>

            </div>
            <div className={clsx(style.container)}>
                <div className={clsx(style.infoBlock)}>
                    <span className={clsx(style.key)}>Production Companies: </span>
                    <span className={clsx(style.value)}>{companies}</span>
                </div>
                <div className={clsx(style.infoBlock)}>
                    <span className={clsx(style.key)}>Genres: </span>
                    <span className={clsx(style.value)}>{genre}</span>
                </div>
                <div className={clsx(style.infoBlock)}>
                    <span className={clsx(style.key)}>Highlight Comment: </span>
                    <span className={clsx(style.value)}>{info.tagline}</span>
                </div>
                <div className={clsx(style.infoBlock)}>
                    <span className={clsx(style.key)}>Maturity Rating</span>
                    <span className={clsx(style.value)}>
                        {info.adult === false && 
                        <div> 
                            <span className={clsx(style.TagAge)}>13+</span>
                            <span className={clsx(style.TagNote)}>Recommended for ages 13 and up</span>
                        </div>
                        }
                        {info.adult === true && 
                        <div> 
                            <span className={clsx(style.TagAge)}>16+</span>
                            <span className={clsx(style.TagNote)}>Recommended for ages 16 and up</span>
                        </div>
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default memo(FooterInfo)