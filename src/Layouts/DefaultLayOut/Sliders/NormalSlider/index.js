
import{useEffect,useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from 'clsx';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";

import request from '~/utils/httpRequest';
import style from './NormalSlider.module.scss'
import {baseImgURL} from '~/Layouts/DefaultLayOut/ThumbNail'
import PreviewWindow from '~/Layouts/Components/PreviewWindow';
function NormalSlider({path}) {

    const[list,setList] = useState([])

    useEffect(()=>{
        request.get(path,{
            params:{
                api_key:process.env.REACT_APP_API_KEY,
                language:'en-US'
            }
        })
        .then(movie=>setList(movie.data.results))
    },[])

    return ( 
        <>
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
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        slidesPerView={6}
        spaceBetween={5}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="mySwiper"
        modules={[Pagination,Navigation]}
            >
                {list.map((movie,index)=>(
                    <SwiperSlide key={index}>
                        <div className={clsx(style.SliderBlock)}>
                            <img className={clsx(style.SliderThumb)} src={`${baseImgURL}${movie.backdrop_path}`} alt="" />
                            <div  className={clsx(style.SliderTags)}>
                                <span className={clsx(style.SliderTag,style.SliderTagRed)}>new episode</span>
                                <span className={clsx(style.SliderTag,style.SliderTagWhite)}>weekly</span>
                            </div>
                            <PreviewWindow thumb={movie} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
     );
}

export default NormalSlider;