import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"

const Header = () =>{
    
    const currentPath = useLocation().pathname

    return (
        <>
            <header className={(currentPath === "/") ? "login-header" : "default-header"}>
                {(currentPath === "/") ? <p className="slogan">Lost in translation</p> : <></>}
                <Navbar />
            </header>
        </>
    )
}

export default Header