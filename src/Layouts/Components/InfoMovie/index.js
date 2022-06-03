
import clsx from "clsx"


import {useEffect, useState} from 'react'


import style from './InfoMovie.module.scss'
import request from "~/utils/httpRequest"
import BasicInfo from './Components/BasicInfo'
import Recommend from './Components/Recommend'
import FooterInfo from './Components/FooterInfo'

const baseImgURL= process.env.REACT_APP_ORIGINAL_IMG

function InfoMovie({data}){
    const [genres,setGenres] = useState([])
    const [info,setInfo] = useState([])

    useEffect(()=>{
        request.get('/genre/movie/list',{
            params:{
                api_key:process.env.REACT_APP_API_KEY,
                language:'en-US'
            }
        })
        .then(res=> {
            return res.data.genres
        })
        .then(res=>{
            if(data){
                const array=[]
                for( let i = 0 ; i< data.genre_ids.length ; i++ ){
                    const result = res.find(e=>{
                        return e.id === data.genre_ids[i]
                    })
                    array.push(result.name)
                    setGenres(array.toString())
                }
            }
            else{
                return
            }

        })
    },[data])

    useEffect(()=>{
        if(data){
            request.get(`/movie/${data.id}`,{
                params:{
                    api_key:process.env.REACT_APP_API_KEY,
                    language:'en-US'
                }
            })
            .then(res=>setInfo(res.data))
        }
    },[data])




    return(
        <div className={clsx(style.wrapper)}>
            <div className={clsx(style.wrapperContainer)}>
                <img className={clsx(style.movieThumbnail)} alt='' src={`${baseImgURL}${data.backdrop_path}`}></img>
                <div className={clsx(style.container)}>
                    <BasicInfo data={data} genres={genres} info={info} />
                    <Recommend />
                    <FooterInfo data={data} genre={genres} info={info} />
                </div>
            </div>
        </div>
    )
}

export default InfoMovie