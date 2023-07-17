import ProfileActions from "../components/Profile/ProfileActions"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"

const Profile = () => {

    const { user } = useUser()

    return (
        <div className="profile">
            <ProfileTranslationHistory translations={ user.translations }/>
            <ProfileActions/>
        </div>
    )
}

export default withAuth(Profile)