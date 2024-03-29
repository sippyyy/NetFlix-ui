
import{useEffect,useState,memo} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";

import request from '~/utils/httpRequest';
import MovieBlock from '~/Layouts/Components/MovieBlock';
function NormalSlider({path,type}) {

    const[list,setList] = useState([])

    useEffect(()=>{
        request.get(path,{
            params:{
                api_key:'b2a1fd40807ef235498cc7e7fb8f529f',
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
                        <MovieBlock movie={movie} type={type} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
     );
}

export default memo(NormalSlider);