import clsx from 'clsx'


import style from './Home.module.scss'
import ThumbNail from '~/Layouts/DefaultLayOut/ThumbNail';
import NormalSlider from '~/Layouts/DefaultLayOut/Sliders/NormalSlider';
import NumberSlider from '~/Layouts/DefaultLayOut/Sliders/NumberSlider';

const bucketList = [
    {
        title:'Now Playing',
        path:'/movie/now_playing'
    },
    {
        title:'Popular',
        path:'/movie/popular'
    },
    {
        title:'Upcoming',
        path:'/movie/upcoming'
    },
    {
        title:'Top 10 Rated',
        path:'/movie/top_rated'
    },
]

function Home() {
    return ( 
        <>
            <div className={clsx(style.thumbnail)} >
                    <ThumbNail path="movie/upcoming" prefix="/movie/" backfix="/videos"></ThumbNail>
            </div>
            {/* <div className={clsx(style.sildersWrapper)}>
                {bucketList.map((list,index)=>(
                    <div key={index} className={clsx(style.sliderContainer)}>
                        <h2 className={style.titleSlider}>{list.title}</h2>
                        <NormalSlider path={list.path}></NormalSlider>
                    </div>
                ))}
                <NumberSlider path="/movie/upcoming"/>
            </div> */}
        </>
     );
}

export default Home;