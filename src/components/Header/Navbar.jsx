import { NavLink, useLocation } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import withAuth from "../../hoc/withAuth"
import {TbHeartHandshake} from "react-icons/tb"
import {CgProfile} from "react-icons/cg"

const Navbar = () => {

    const { user } = useUser()

    //const currentPath = useLocation().pathname

    return (
        <>
        <div className="nav-slogan-wr">
        <img src="/img/sign-language.png"></img>
        <NavLink to="/translator"><p className="default-slogan">Lost in translation</p></NavLink>
        </div>
        <div className="nav-user-wr">
            <div class="name-wr">
                <p>Welcome {user.username}!</p>
            </div>
            <NavLink to="/profile"><CgProfile size={40} style={{color: '#ffc760'}}/></NavLink>
        </div>
        {}
        </>
    )
}

export default withAuth(Navbar)