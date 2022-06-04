
import{useEffect,useState,memo} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from 'clsx';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";

import request from '~/utils/httpRequest';
import style from './NumberSlider.module.scss'
import {baseImgURL} from '~/Layouts/DefaultLayOut/ThumbNail'
import PreviewWindow from '~/Layouts/Components/PreviewWindow';
function NumberSlider({path}) {

    const[list,setList] = useState([])

    useEffect(()=>{
        request.get(path,{
            params:{
                api_key:process.env.REACT_APP_API_KEY,
                language:'en-US'
            }
        })
        .then(movie=>setList(movie.data.results.slice(0,10)))
    },[])
    
    return ( 
        <>
        <h2 className={clsx(style.titleSlider)}> Top Movies UpComing </h2>
            <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="mySwiper"
        modules={[Pagination,Navigation]}
            >
                {list.map((movie,index)=>(
                    <SwiperSlide key={index}>
                        <div key = {index} >
                            <div className={clsx(style.Block,style.SliderBlock)}>
                                <span className={clsx(style.Rank)}>{index + 1}</span>
                                <img className={clsx(style.Img)} src={`${baseImgURL}${movie.poster_path}`} alt=""></img>
                                <div className={clsx(style.Tags)}>
                                    <span className={clsx(style.Tag,style.SliderTagRed)}>new episodes</span>
                                    <span className={clsx(style.Tag,style.SliderTagWhite)}>Weekly</span>
                                </div>
                                <PreviewWindow thumb={movie} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
     );
}

export default memo(NumberSlider);