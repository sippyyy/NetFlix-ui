import clsx from 'clsx'
import {useState,useEffect} from 'react'
import MovieBlock from '~/Layouts/Components/MovieBlock';

import request from '~/utils/httpRequest';
import style from './Discover.module.scss';



function Discover() {
    const [list,setList] = useState([])

    useEffect(()=>{
        request.get('/discover/movie',{
            params:{
                api_key:'b2a1fd40807ef235498cc7e7fb8f529f',
                language:'en-US',
                sort_by:'popularity.desc'
            }
        })
        .then(res=> setList(res.data.results))
    },[])


    return ( 
        <div className={clsx(style.wrapperContainer)}>
            <h2 className={clsx(style.title)}>Discover The Most Popular Movies Today</h2>
            <div className={clsx(style.wrapper)}>
                {list.map((element,index)=>(
                    <MovieBlock key={index} movie={element} />
                ))}
            </div>
        </div>
     );
}

export default Discover;