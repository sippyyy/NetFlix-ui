import clsx from 'clsx'
import {useEffect,useLayoutEffect,useState,useRef} from 'react'

import {FaPlay} from '@react-icons/all-files/fa/FaPlay';
import {FaInfoCircle} from '@react-icons/all-files/fa/FaInfoCircle';
import {FaVolumeUp} from '@react-icons/all-files/fa/FaVolumeUp';
import {FaVolumeMute} from '@react-icons/all-files/fa/FaVolumeMute';
import {FaRedo} from '@react-icons/all-files/fa/FaRedo';


import request from '~/utils/httpRequest'

import style from './ThumbNail.module.scss'
import InfoMovie from '~/Layouts/Components/InfoMovie';

export const baseImgURL = process.env.REACT_APP_ORIGINAL_IMG

function ThumbNail({path,prefix,backfix}) {

    const [play,setPlay] = useState(false)
    const [mute,setMute] = useState(1)
    const [button,setButton] = useState(false)
    // const [control,setControl] = useState(false)
    const [rePlay,setReplay] = useState(false)
    const [currentMovie,setCurrentMovie] = useState('')
    const [trailer,setTrailer] = useState ('')
    const refName = useRef()
    
    // const handleVolume = ()=>{
    //     setMute(mute === 1 ? 0 : 1)
    // }
    
    useEffect(()=>{
        request.get(path,{
            params:{
                api_key:process.env.REACT_APP_API_KEY,
                language:'en-US'
            }
        })
        .then(movie=>{
            const random = Math.floor(Math.random()*10)
            setCurrentMovie(movie.data.results[random])
            return movie.data.results[random].id
        })
        .then(trailerId => request.get(`${prefix}${trailerId}${backfix}`,{
            params:{
                api_key:process.env.REACT_APP_API_KEY,
                language:'en-US'
            }
        }
        ))
        .then(Id=>{
            setTrailer(Id.data.results[0].key)
        })
    },[])


    useLayoutEffect(()=>{
        setTimeout(()=>{
            setPlay(play ===false ? true : false)
            // setButton(button === false ? true : false)
            // refName.current.play()
            // setControl(control === false ? true : false)
        },3000)
    },[])



    // const a = useLayoutEffect(()=>{
    //     if(refName.current.duration){
    //         setTimeout(()=>{
    //             setPlay(play ===false ? true : false)
    //             setButton(button === false ? true : false)
    //             setReplay(rePlay === false? true : false)
    //         },refName.current.duration*1000)
    //     }else{
    //     }
    // },[control])

    const handleOnPlay = ()=>{
        refName.current.play()
        setPlay(play ===false ? true : false)
    }



 return(
    <div className={clsx(style.Container)}>
        <div className={clsx(style.ContainerThumb)}>
            <img className={clsx(style.ContainerThumbImg,{
                [style.ContainerThumbImgDisplay] : play === true
            })} src={`${baseImgURL}${currentMovie.backdrop_path}`} alt="" />
            
            <iframe 
                className={clsx(style.ThumbVideo)} ref={refName} 
                title="This is a unique title" 
                src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=${mute}&enablejsapi=1&controls=0`} 
                frameBorder='0' 
                // allow='autoplay; encrypted-media' 
                allowFullScreen> 
            </iframe>
            
            <div className={clsx(style.ThumbVideoDetailContainer)}>
                <div className={clsx(style.ThumbVideoDetail)}>
                    <div className={clsx(style.ThumbVideoHeading)}>
                    <h2 className={clsx(style.ThumbVideoName,{
                        [style.ThumbVideoNameSmall]: play===true
                    })}>{currentMovie.original_title}</h2>
                    <h3 className={clsx(style.ThumbVideoNameSub,{
                        [style.ThumbVideoNameSubSmall] :play===true
                    })}>{currentMovie.original_title || currentMovie.original_name}</h3>
                    </div>
                    <span className={clsx(style.ThumbVideoDesc,{
                        [style.ThumbVideoDescSmall] : play===true
                    })}>{currentMovie.overview}</span>
                </div>

                <div className={clsx(style.ThumbVideoButtons)}>
                    <div className={clsx(style.ThumbVideoButtonsLeft)}>
                        <div className={clsx(style.ThumbVideoButton,style.ThumbVideoButtonPlay)}>
                            <span className={clsx(style.ThumbVideoButtonIcon)}><FaPlay /></span>
                            <span className={clsx(style.ThumbVideoButtonContent)}>Play</span>
                        </div>
                        <div className={clsx(style.ThumbVideoButton,style.ThumbVideoButtonInfo)}>
                            <span className={clsx(style.ThumbVideoButtonIcon)}> <FaInfoCircle /> </span>
                            <span className={clsx(style.ThumbVideoButtonContent)}>More Info</span>
                        </div>
                    </div>
                        <InfoMovie data={currentMovie}></InfoMovie>
                    <div className={clsx(style.ThumbSettingContainer)}>
                        <div className={clsx(style.ThumbSetting,{
                            [style.ThumbSettingHide]: rePlay === false
                        })}>
                            <span className={clsx(style.ThumbSettingSound)} onClick={handleOnPlay}><FaRedo /></span>
                        </div>
                        <div className={clsx(style.ThumbSetting,{
                                [style.ThumbSettingHide]: button === false
                            })}>

                            <div className={clsx({
                                [style.ThumbSettingHide]: mute === 1
                            })} >
                                <span 
                                className={clsx(style.ThumbSettingSound)} 
                                // onClick={handleVolume}
                                    ><FaVolumeUp />
                                </span>
                            </div>

                            <div  className={clsx({
                                [style.ThumbSettingHide]: mute === 0
                            })}>
                                <span 
                                className={clsx(style.ThumbSettingSound)} 
                                // onClick={handleVolume} 
                                ><FaVolumeMute />
                                </span>
                            </div>

                            <span className={clsx(style.ThumbSettingTagAge)}>13+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 )
}

export default ThumbNail;