import clsx from 'clsx'

import { BsPlusCircle } from "@react-icons/all-files/bs/BsPlusCircle";



import style from './Recommend.module.scss' 
import pic from '~/img/user.jpg'


function Recommend({data}) {
    return ( 
        <div className={clsx(style.wrapper)}>
            <h3 className={clsx(style.title)}>More Like This</h3>
            <div className={clsx(style.moviesWrapper)}>

                <div className={clsx(style.block)}>
                    <img className={clsx(style.image)} alt='' src={pic}/>
                    <div className={clsx(style.content)}>
                        <div className={clsx(style.tags)}>
                            <div className={clsx(style.leftTags)}>
                                <span className={clsx(style.TagAge)}>16+</span>
                                <span className={clsx(style.name)}>Lorem</span>
                            </div>
                            <span className={clsx(style.icon)}><BsPlusCircle/></span>
                        </div>
                        <span className={clsx(style.desc)}>Lorem</span>
                    </div>
                </div>

                <div className={clsx(style.block)}>
                    <img className={clsx(style.image)} alt='' src={pic}/>
                    <div className={clsx(style.content)}>
                        <div className={clsx(style.tags)}>
                            <div className={clsx(style.leftTags)}>
                                <span className={clsx(style.TagAge)}>16+</span>
                                <span className={clsx(style.name)}>Lorem</span>
                            </div>
                            <span className={clsx(style.icon)}><BsPlusCircle/></span>
                        </div>
                        <span className={clsx(style.desc)}>Lorem</span>
                    </div>
                </div>

                <div className={clsx(style.block)}>
                    <img className={clsx(style.image)} alt='' src={pic}/>
                    <div className={clsx(style.content)}>
                        <div className={clsx(style.tags)}>
                            <div className={clsx(style.leftTags)}>
                                <span className={clsx(style.TagAge)}>16+</span>
                                <span className={clsx(style.name)}>Lorem</span>
                            </div>
                            <span className={clsx(style.icon)}><BsPlusCircle/></span>
                        </div>
                        <span className={clsx(style.desc)}>Lorem</span>
                    </div>
                </div>

                <div className={clsx(style.block)}>
                    <img className={clsx(style.image)} alt='' src={pic}/>
                    <div className={clsx(style.content)}>
                        <div className={clsx(style.tags)}>
                            <div className={clsx(style.leftTags)}>
                                <span className={clsx(style.TagAge)}>16+</span>
                                <span className={clsx(style.name)}>Lorem</span>
                            </div>
                            <span className={clsx(style.icon)}><BsPlusCircle/></span>
                        </div>
                        <span className={clsx(style.desc)}>Lorem</span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Recommend;