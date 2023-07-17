import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation} translation={ translation }/>
        )

    return (
        <section className="translation-history">
            <h2>Your Translation History</h2>
            <ul>{ translationList }</ul>
        </section>
    )
}

export default ProfileTranslationHistory