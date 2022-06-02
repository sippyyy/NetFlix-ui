import Logo from "../Components/Logo";

function LoginLayout({children}) {
    return ( 
        <div className="Container">
            <div className="Header">
                <Logo></Logo>
            </div>
            <div className="content">{children}</div>
        </div>

     );
}

export default LoginLayout;