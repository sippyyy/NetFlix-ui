import {useState,useContext,memo} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'

import { FaSearch} from '@react-icons/all-files/fa/FaSearch';
import {FaBell} from '@react-icons/all-files/fa/FaBell';
import {FaPencilAlt} from '@react-icons/all-files/fa/FaPencilAlt';
import {FaChevronDown} from '@react-icons/all-files/fa/FaChevronDown';
import {FaRegUser} from '@react-icons/all-files/fa/FaRegUser';
import {FaRegQuestionCircle} from '@react-icons/all-files/fa/FaRegQuestionCircle';



import style from './Header.module.scss'
import Context from '~/Context'
import Home from '~/pages/Home';
import TvShow from '~/pages/TvShows';


const Items =[
    {
        id: 1,
        nav: 'Home',
        path: '/home',
    },
    {
        id: 2,
        nav: 'TV Shows',
        path: '/tvshows',
    }
    
]


function Header(background) {
    const [openInput,setOpenInput] = useState(false)
    const [active,setActive] = useState('')

    const handleOpenSearch = ()=>{
        setOpenInput(openInput === false ? true : false)
    }
    const users = useContext(Context)
    const user  = users[0]



    return ( 
        <div className ={clsx(style.NavBar,{
            [style.Black] : background.background === true
        })}>
    
            <div className ={clsx(style.NavBarLeft)}>
                <ul className ={clsx(style.NavBarList)}>
                    {Items.map((item,index)=>(
                        <Link to={item.path} key={index}  style={{ textDecoration: 'none' }}>
                            <li 
                                className ={clsx(style.NavBarItem,{
                                    [style.NavBarItemActive] : active === item.path
                                })}
                                onClick = {()=>{setActive(item.path)}}
                                >{item.nav}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className ={clsx(style.NavBarRight)}>
                <div className ={clsx(style.NavBarFindContainer)}>
                    <div className ={clsx(style.NavBarFind,{
                        [style.NavBarFindOpen] : openInput === true
                    })}>
                        <p onClick ={handleOpenSearch} className ={clsx(style.NavBarItemIcon,{
                            [ style.NavBarItemIconSearch]: openInput === true
                        })}><FaSearch /></p>
                        
                            <input className ={clsx(style.NavBarFindPlace)} placeholder="Titles,people,genres..."/>
                    </div>
                </div>
                <div className ={clsx(style.NavBarNoti)}>
                    <p className ={clsx(style.NavBarItemIcon,style.NavBarItemIconNoti)}><FaBell /></p>
                    <div className ={clsx(style.NavBarNotiWrap)}>
                        <div className ={clsx(style.NavBarNotiContainer)}>
                            <div className ={clsx(style.NavBarNotiBlock)}>
                                <img className ={clsx(style.NavBarNotiThumb)} src='https://cuongphim.com/wp-content/uploads/2022/05/hinh-anh-stranger-things-tai-london-2-cuong-phim.jpg' alt=""/>
                                <div className ={clsx(style.NavBarNotiContent)}>
                                    <h4 className ={clsx(style.NavBarNotiTitle)}>New Arrival</h4>
                                    <h4 className ={clsx(style.NavBarNotiTitle)}>STRANGER THINGS 4</h4>
                                    <span className ={clsx(style.NavBarNotiDesc)}>1 week ago</span>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
                <div className ={clsx(style.NavBarUser)}>
                    <img className ={clsx(style.NavBarUserAva)} alt="" src={user.userAvatar}></img>
                    <p className ={clsx(style.NavBarUserIcon)}><FaChevronDown /></p>
                    <div  className ={clsx(style.Setting)}>
                        <div className ={clsx(style.SettingUser)}>
                            <div  className ={clsx(style.SettingUserList)}>
                                <div className ={clsx(style.SettingUserItem)}>
                                    <img className ={clsx(style.SettingUserAva)} src={user.userAvatar} alt=""></img>
                                    <p className ={clsx(style.SettingUserText)}>{user.userName}</p>
                                </div>
                            </div>
    
    
                            <div className ={clsx(style.SettingUserItem)}>
                                    <div className ={clsx(style.SettingUserIcon)}><FaPencilAlt/></div>
                                    <Link to='/edit' style={{ textDecoration: 'none' }}> 
                                    <p className ={clsx(style.SettingUserText)}>Manage Profiles</p>
                                    </Link>
                            </div>
                        </div>
    
    
    
                        <div  className ={clsx(style.SettingUser)} >
                            <div className={clsx(style.SettingUserList)}>
                            <div className ={clsx(style.SettingUserItem)}>
                                    <div className ={clsx(style.SettingUserIcon)}><FaRegUser/></div>
                                    <p className ={clsx(style.SettingUserText)}>Account</p>
                                </div>
    
                                <div className ={clsx(style.SettingUserItem)}>
                                    <div className ={clsx(style.SettingUserIcon)}><FaRegQuestionCircle/></div>
                                    <p className ={clsx(style.SettingUserText)}>Help Center</p>
                                </div>
                            </div>
                        </div>
    
                        <div className ={clsx(style.SettingUserItem,style.SettingUserSignOut)}>
                            <span className ={clsx(style.SettingUserText,style.SettingUserTextSignOut)}> Sign out of Netflix </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default memo(Header);