import { NavLink, useLocation } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import withAuth from "../../hoc/withAuth"

const Navbar = () => {

    const { user } = useUser()

    const currentPath = useLocation().pathname

    return (
        <nav class="navbar">
            { user !== null &&
                <ul>
                    <li className={(currentPath === "/translator") ? "active-page" : null}>
                        <NavLink to="/translator">Translator</NavLink>
                    </li>
                    <li className={(currentPath === "/profile") ? "active-page" : null}>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                </ul>
            }
        </nav>
    )
}

export default withAuth(Navbar)