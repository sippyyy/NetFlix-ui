import clsx from 'clsx'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { FaPencilAlt } from "@react-icons/all-files/fa/FaPencilAlt";

import Login from '~/pages/Login'
import style from './Edit.module.scss'
import Context from '~/Context';


function Edit() {
    const user = useContext(Context)
    const temporaryUser= user[0]
    return ( 
        <div className={clsx(style.FormContainer)}>
        <div className={clsx(style.Form)}>
            <h2 className={clsx(style.FormHeader)}>Edit Profile</h2>
                <div className={clsx(style.FormBlockSeparate)} ></div>
            <div className={clsx(style.FormBody)}>
                    <div className={clsx(style.FormBodyLeft)}>
                        <img className={clsx(style.FormBodyAvatar)} src={temporaryUser.userAvatar} alt=""/>
                        <div>
                        <span className={clsx(style.FormBodyEditAva)}><FaPencilAlt/></span>
                        </div>
                    </div>

                    <div className={clsx(style.FormBodyRight)}>
                        <div className={clsx(style.FormBlock)}>
                            <input className={clsx(style.FormBodyInput)} value={temporaryUser.userName} disabled type="text"></input>
                            <div className={clsx(style.FormBodySelection)} >
                                <p className={clsx(style.FormBodyTitle)} >Language:</p>
                                <select className={clsx(style.FormBodySelect)}>
                                    <option className={clsx(style.FormBodyContent)} value="english">English</option>
                                </select>
                            </div>
                        </div>

                        <div className={clsx(style.FormBlockSeparate)}></div>

                        <div className={clsx(style.FormBlock)}>
                            <p className={clsx(style.FormBodyTitle)}>Maturity Settings</p>
                            <p className={clsx(style.FormBodyContentBox)}>All Maturity Ratings</p>
                            <p className={clsx(style.FormBodyContent)}>Show titles of all maturity ratings for this profile.</p>
                            <p className={clsx(style.FormBodyBtn)}>Edit</p>
                        </div>
    
                        <div className={clsx(style.FormBlockSeparate)}></div>


                        <div className={clsx(style.FormBlock)}>
                            <p className={clsx(style.FormBodyTitle)}>Autoplay controls</p>
                            <div  className={clsx(style.FormCheckBox)} >
                                <div className={clsx(style.FormCheckBoxBlock)} >
                                <input className={clsx(style.FormBodyCheckBox)} disabled type = "checkbox"></input>
                                <label className={clsx(style.FormBodyContent)} htmlFor="input1">Autoplay next episode in a series on all device</label>
                                </div>
                                <div className={clsx(style.FormCheckBoxBlock)} >
                                <input className={clsx(style.FormBodyCheckBox)} checked disabled type = "checkbox"></input>
                                <label className={clsx(style.FormBodyContent)} htmlFor ="input2">Autoplay previews while browsing on all devices</label>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={clsx(style.FormBlockSeparate)}></div>
            <div className={clsx(style.FormButton)}>
                <p className={clsx(style.FormSaveBtn,style.Button)}>Save</p>
                <Link to="/" element={<Login />} style={{ textDecoration: 'none' }} > 
                <p className={clsx(style.FormCancelBtn,style.Button)}>Cancel</p> 
                </Link>
            </div>
        </div>
    </div>
     );
}

export default Edit;