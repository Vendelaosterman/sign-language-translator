import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import withAuth from "../../hoc/withAuth"

const Navbar = () => {

const { user } = useUser()

    return (
        <nav>
            { user !== null &&
                <ul>
                    <li>
                        <NavLink to="/translator">Translator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                </ul>
            }
        </nav>
    )
}

export default withAuth(Navbar)