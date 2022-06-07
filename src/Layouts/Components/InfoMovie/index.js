
import clsx from "clsx"


import {useEffect, useState,useRef,memo} from 'react'
import { IoMdCloseCircle } from "@react-icons/all-files/io/IoMdCloseCircle";



import style from './InfoMovie.module.scss'
import request from "~/utils/httpRequest"
import BasicInfo from './Components/BasicInfo'
import Recommend from './Components/Recommend'
import FooterInfo from './Components/FooterInfo'

const baseImgURL= 'https://image.tmdb.org/t/p/original'

function InfoMovie({data,setOpen}){
    const [genres,setGenres] = useState([])
    const [info,setInfo] = useState([])
    const blockRef = useRef()

    useEffect(()=>{
        request.get('/genre/movie/list',{
            params:{
                api_key:'b2a1fd40807ef235498cc7e7fb8f529f',
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
                    api_key:'b2a1fd40807ef235498cc7e7fb8f529f',
                    language:'en-US'
                }
            })
            .then(res=>setInfo(res.data))
        }
    },[data])

    const handleClose = ()=>{
            setOpen(false)
    }

    const handleCloseOther=(e)=>{
        e.stopPropagation()
        if(e.target === blockRef.current){
            setOpen(false)
    }
}


    return(
        <div ref={blockRef} onClick={(e)=>handleCloseOther(e)} className={clsx(style.wrapper)}>
            <div className={clsx(style.wrapperContainer)}>
                <img className={clsx(style.movieThumbnail)} alt='' src={`${baseImgURL}${data.backdrop_path}`}></img>
                <span onClick={handleClose} className={clsx(style.closeBtn)}><IoMdCloseCircle /></span>  
                <div className={clsx(style.container)}>
                    <BasicInfo data={data} genres={genres} info={info} />
                    <Recommend data={data} />
                    <FooterInfo data={data} genre={genres} info={info} />
                </div>
            </div>
        </div>
    )
}

export default memo(InfoMovie)