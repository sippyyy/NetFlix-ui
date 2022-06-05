import Login from '~/pages/Login'
import Edit from '~/pages/Edit'
import Home from '~/pages/Home'
import TvShows from '~/pages/TvShows'
import Search from '~/pages/Search'

import config from '~/config'
import DefaultLayout from '~/Layouts/DefaultLayOut'
import LoginLayout from '~/Layouts/LoginLayout'

const AppRoutes = [
    {path:config.routes.login,component: Login, layout:LoginLayout},
    {path:config.routes.edit,component: Edit,layout:LoginLayout},
    {path:config.routes.home,component: Home, layout:DefaultLayout},
    {path:config.routes.tvshows,component: TvShows,layout:DefaultLayout},
    {path:config.routes.search,component:Search,layout:DefaultLayout}
]

export default AppRoutes
