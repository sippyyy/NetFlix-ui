import Logo from '~/Layouts/Components/Logo'
import Header from './Header'
import Footer from './Footer';
import InputProvider from '~/Context/Input/Provider';


function DefaultLayout({children}) {
    return ( 
        <>
        <InputProvider>
            <Logo></Logo>
            <Header></Header>
            <div className="Container">
                <div className="bodyContent">
                    {children}
                </div>
            </div>
            <Footer></Footer>
        </InputProvider>
        </>
     );
}

export default DefaultLayout;