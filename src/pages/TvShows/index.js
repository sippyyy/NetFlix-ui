import clsx from 'clsx'


import style from './TvShows.module.scss'
import ThumbNail from '~/Layouts/DefaultLayOut/ThumbNail';
import NormalSlider from '~/Layouts/DefaultLayOut/Sliders/NormalSlider';
import NumberSlider from '~/Layouts/DefaultLayOut/Sliders/NumberSlider';

const bucketList = [
    {
        title:'TV Airing Today',
        path:'/tv/airing_today'
    },
    {
        title:'TV On The Air',
        path:'/tv/on_the_air'
    },
    {
        title:'Popular',
        path:'/tv/popular'
    },
]

function TvShows() {
    return ( 
        <>
            <div className={clsx(style.thumbnail)} >
                    <ThumbNail path="/movie/upcoming" prefix="/movie/" backfix="/videos"></ThumbNail>
            </div>
            <div className={clsx(style.sildersWrapper)}>
                {bucketList.map((list,index)=>(
                    <div key={index} className={clsx(style.sliderContainer)}>
                        <h2 className={style.titleSlider}>{list.title}</h2>
                        <NormalSlider path={list.path}></NormalSlider>
                    </div>
                ))}
                <NumberSlider path="/movie/upcoming"/>
            </div>
        </>
     );
}

export default TvShows;