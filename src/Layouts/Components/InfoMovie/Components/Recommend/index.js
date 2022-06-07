import clsx from 'clsx'
import {useEffect,useState,memo} from 'react'

import { BsPlusCircle } from "@react-icons/all-files/bs/BsPlusCircle";



import style from './Recommend.module.scss' 
import request from '~/utils/httpRequest'

const imgUrl = process.env.REACT_APP_ORIGINAL_IMG

function Recommend({data}) {

    console.log(data)

    const [recommend,setRecommend] = useState([])

    useEffect(()=>{
        if(data.id){
            request.get(`/movie/${data.id}/similar`,{
                params:{
                    api_key:'b2a1fd40807ef235498cc7e7fb8f529f',
                    language:'en-US'
                }
            })
            .then(res=>setRecommend(res.data.results))
        }
    },[data])


    
    return ( 
        <div className={clsx(style.wrapper)}>
            <h3 className={clsx(style.title)}>More Like This</h3>
            <div className={clsx(style.moviesWrapper)}>

                {recommend.map((movie,index)=>(
                <div key={index} className={clsx(style.block)}>
                    <img className={clsx(style.image)} alt='' src={`${imgUrl}${movie.backdrop_path}`}/>
                    <div className={clsx(style.content)}>
                        <div className={clsx(style.tags)}>
                            <div className={clsx(style.leftTags)}>
                                {movie.adult === true && <span className={clsx(style.TagAge)}>16+</span>}
                                {movie.adult === false && <span className={clsx(style.TagAge)}>13+</span>}
                                <span className={clsx(style.name)}>{movie.title}</span>
                            </div>
                            <span className={clsx(style.icon)}><BsPlusCircle/></span>
                        </div>
                            {movie.overview.length <= 170 && <span className={clsx(style.desc)}>{movie.overview}</span>}
                            {movie.overview.length > 170 && <span className={clsx(style.desc)}>{movie.overview.slice(0,150)}...</span>}

                    </div>
                </div>
                ))}
                
            </div>
        </div>
     );
}

export default memo(Recommend);