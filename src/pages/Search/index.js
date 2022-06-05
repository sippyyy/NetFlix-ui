import clsx from 'clsx'
import {useEffect,useContext,useState} from 'react'



import style from './Search.module.scss'
import MovieBlock from '~/Layouts/Components/MovieBlock';
import request from '~/utils/httpRequest';
import inputContext from '~/Context/Input';



function Search() {
    const [state,dispatch] = useContext(inputContext)
    const [list,setList]=useState([])
    const [movies,setMovies]= useState([])
    const query = state.value
    
    useEffect(()=>{
        request.get('/search/movie',{
            params:{
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US',
                query:query,
            }
        })
        .then(res=>{
            setList(res.data.results)
        })
    },[])


    return (
        <div className={clsx(style.wrapper)}>
            {list.map(movie=>(
                <MovieBlock movie={movie} />
            ))}
        </div>
    )
}

export default Search;