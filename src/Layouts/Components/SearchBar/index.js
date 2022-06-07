import {useState,useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';


import { FaSearch} from '@react-icons/all-files/fa/FaSearch';
import { IoIosClose} from '@react-icons/all-files/io/IoIosClose';
import clsx from 'clsx'
import { setJob } from '~/Context/Input/action';

import style from './SearchBar.module.scss'
import inputContext from '~/Context/Input';


function SearchBar() {
    const [openInput,setOpenInput] = useState(false)
    const [path,setPath] = useState('/home')
    const [value,setValue] = useState('')
    const inputRef= useRef()

    const [state,dispatch] = useContext(inputContext)

    const handleOpenSearch = ()=>{
        setOpenInput(openInput === false ? true : false)
        if(openInput === true){
            setPath('/home')
            dispatch(setJob(''))
        }

    }
    
    const handleOnChange = (e)=>{
        dispatch(setJob(e.target.value))
    }
    
    const length = state.value.length
    useEffect(()=>{
        if(length < 1 && openInput === true){
            setPath('/home')
            inputRef.current.click()
    
        } else if(length > 0){
            setPath('/search')
            inputRef.current.click()
        }
    })




    return ( 
        <div className ={clsx(style.NavBarFindContainer)}>
            <div className ={clsx(style.NavBarFind,{
                [style.NavBarFindOpen] : openInput === true
            })}>
                <p onClick ={handleOpenSearch} className ={clsx(style.NavBarItemIcon,{
                    [ style.NavBarItemIconSearch]: openInput === true
                })}>{openInput === false && <FaSearch />}{openInput=== true && <Link className ={clsx(style.NavBarFindClose)} to='/home'><IoIosClose/></Link>}</p>
                
                <Link to={path}>
                <input value={state.value} ref={inputRef} onChange={(e)=>handleOnChange(e)} className ={clsx(style.NavBarFindPlace,{
                            [style.NavBarFindPlaceOpen]: openInput===true
                    })} placeholder="Titles,people,genres..."/>
                </Link>
            </div>
        </div>
     );
}

export default SearchBar;