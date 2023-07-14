import ProfileActions from "../components/Profile/ProfileActions"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"

const Profile = () => {

    const { user } = useUser()

    return (
        <>
            <h1>Profile</h1>
            <ProfileActions/>
            <ProfileTranslationHistory translations={ user.translations }/>
        </>
    )
}

export default withAuth(Profile)