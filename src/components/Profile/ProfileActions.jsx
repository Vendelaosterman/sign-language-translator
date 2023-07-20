import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { translationClearHistory } from "../../api/translation"

const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if (!window.confirm('Are you sure?\nThis can not be undone!'))
        return

        const [ clearError ] = await translationClearHistory(user.id)

        if (clearError !== null) {
            return 
        }
    
        const updatedUser = {
            ...user,
            translations: []
        }
 
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
        <ul className="profile-actions">
            {user.translations.length !== 0 ? <li><button onClick={ handleClearHistoryClick }>Clear History</button></li> : <li><button className="inactive-btn">Clear History</button></li> }
            <li><button onClick={ handleLogoutClick } >Logout</button></li>
        </ul>
    )
}

export default ProfileActions