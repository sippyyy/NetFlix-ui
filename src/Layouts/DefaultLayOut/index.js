import Logo from '~/Layouts/Components/Logo'
import Header from './Header'
import Footer from './Footer';

function DefaultLayout({children}) {
    return ( 
        <>
        <Logo></Logo>
        <Header></Header>
        <div className="Container">
            <div className="bodyContent">
                {children}
            </div>
        </div>
        <Footer></Footer>
        </>
     );
}

export default DefaultLayout;