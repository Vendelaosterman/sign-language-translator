import ProfileActions from "../components/Profile/ProfileActions"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"
import { useEffect } from "react"
import { userById } from "../api/user"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"

const Profile = () => {

    const { user, setUser } = useUser()

    useEffect(() => {
        const findUser = async () => {
            const [ error, latestUser ] = await userById(user.id)
            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }

        //findUser() // need to invoke because of useEffect

    }, [ setUser, user.id ])

    return (
        <div className="profile">
            <ProfileTranslationHistory translations={ user.translations }/>
            <ProfileActions/>
        </div>
    )
}

export default withAuth(Profile)