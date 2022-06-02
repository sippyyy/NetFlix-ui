import {useState,useContext} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'

// ICON
import { FaPencilAlt } from "@react-icons/all-files/fa/FaPencilAlt";

import style from './Login.module.scss'
import Home from '~/pages/Home'
import Edit from '~/pages/Edit'
import Context from '~/Context';



function Login() {
    const [manage,setManage] =  useState(false)

    const handleManage = ()=>{
        setManage(manage === false ? true : false)
    }
    const users = useContext(Context)
    return(
        
        <div className = {clsx(style.Container)}>
            <div className = {clsx(style.ContainerLogin)}>
                <h2 className = {clsx(style.ContainerTitle)}>Who's watching?</h2>
                <div className = {clsx(style.ContainerProfile)}>
                    
                    {/* START USER RENDER */}

                    {users.map((user,index)=>(
                        <div key={index} className = {clsx(style.ContainerBlock)}>
                            <div className = {clsx(style.ContainerAvatar)}>
                                <Link to="/edit" element={<Edit />}>
                                    <p className = {clsx(style.ContainerAvatarCover, {
                                        [style.ContainerAvatarOpenManage] : manage === true
                                    })}><FaPencilAlt /></p>
                                </Link>
                                <Link to="/home" element ={<Home />}>
                                    <img className = {clsx(style.ContainerAvatarItem)} src={user.userAvatar} alt=""/>
                                    </Link>
                            </div>
                            <p className = {clsx(style.ContainerUser)}>{user.userName}</p>
                        </div>
                    ))}
                    

                    {/* END USER RENDER */}


                </div>
                <div className={clsx(style.ContainerManage)}>
                    <span
                     className={clsx(style.ContainerManageBtn,{
                         [style.ContainerManageBtnHide] : manage === true
                     } )}
                     onClick = {handleManage}
                     >Manage Profiles</span>
                    <span
                     onClick = {handleManage}
                     className={clsx(style.ContainerDoneBtn, {
                         [style.ContainerDoneBtnUnhide] : manage === true
                     })}
                     >Done</span>
                </div>
            </div>
        </div>
    )
}

export default Login
