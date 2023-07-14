import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"

const ProfileActions = () => {

    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <ul>
            <li><button>Clear History</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
        </ul>
    )
}

export default ProfileActions