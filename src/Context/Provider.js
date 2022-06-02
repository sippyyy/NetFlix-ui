import Context from './index.js'
import avatar from '~/img/user.jpg'


function Provider({children}) {
    const users = [
        {
            userName: 'SippyHy',
            userAvatar: avatar
        }
    ]
    return ( 
        <Context.Provider value={users}>
            {children}
        </Context.Provider>
     );
}

export default Provider;