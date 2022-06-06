import clsx from 'clsx';
import {useEffect,useState,memo} from 'react'


import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaRegThumbsUp } from "@react-icons/all-files/fa/FaRegThumbsUp";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";




import style from './PreviewWindow.module.scss'

function PreviewWindow({thumb}) {
        const [open,setOpen] = useState(false)
        const [timer,setTimer] = useState()
        const [play,setPlay] =useState(false)
        const [pause,setPause] = useState(1)
        const [id,setId] = useState('')
        const [trailer,setTrailer] = useState('')
    
     
        const handleOpen =()=>{
          setTimer(setTimeout(()=>{
            setOpen(true)
            setId(thumb.id)   
          },1000))
        }
        const handleClose =()=>{
          clearTimeout(timer)
          setPause(0)
          setOpen(false)
          setPlay(false)
        }
    
        useEffect(()=>{
          if(open===true){
            setTimeout(()=>{
              setPlay(true)
              setPause(1)
            },1500)
          }
        },[open])
    
        useEffect(()=>{
          if(id===''){
            return
          }
          fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b2a1fd40807ef235498cc7e7fb8f529f`)
          .then(res=> res.json())
          .then(movie =>{
              setTrailer(movie.results.find(element=>{return element.type ==='Trailer'}))
          })
        },[open])
        
    
    return(
        <div onMouseEnter={()=>handleOpen()} onMouseLeave={()=>{handleClose()}} className={clsx(style.Review,{
            [style.ReviewOpen] : open === true
        })}>
        <div className={clsx(style.ReviewThumb)}>
          <img  className={clsx(style.ReviewImg,{
            [style.ReviewHide] : play === true
          })} src={`https://www.themoviedb.org/t/p/original${thumb.backdrop_path}`} alt="" />
          <iframe title="netflix" className={clsx(style.ReviewVideo,{
            [style.ReviewHide] : play === false
            })} src={`https://www.youtube.com/embed/${trailer.key}?autoplay=${pause}&mute=1&showinfo=0`} frameBorder="0">
          </iframe>
    
        </div>
        <div className={clsx(style.ReviewContent)}>
          <div className={clsx(style.ReviewButtons)}>
            <div className={clsx(style.ReviewButtonsLeft)}>
              <span className={clsx(style.ReviewButton)}><FaPlay/></span>
              <span className={clsx(style.ReviewButton)}><FaPlus/></span>
              <span className={clsx(style.ReviewButton)}><FaRegThumbsUp /></span>
              <span className={clsx(style.ReviewButton)}><FaTimes /></span>
            </div>
            <div className={clsx(style.ReviewButtonsRight)}>
              <span className={clsx(style.ReviewButton)}><FaChevronDown/></span>
            </div>
          </div>
          <div className={clsx(style.ReviewTags)}>
              {thumb.adult && <span className={clsx(style.ReviewTagAge)}>18+</span>}
              <span className={clsx(style.ReviewTag)}>{thumb.title} {thumb.name}</span>
              <span className={clsx(style.ReviewTagQuality)}>HD</span>
            </div>
            <div className={clsx(style.ReviewFilter)}>
              <span className={clsx(style.ReviewTag,style.ReviewFilterItem)}>Star : {thumb.vote_average}/10 </span>
            </div>
        </div>
    </div>
    )
}

export default memo(PreviewWindow);