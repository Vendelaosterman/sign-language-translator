import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation} translation={ translation }/>
        )

    return (
        <section className="translation-history">
            <h2>Your Translation History</h2>
            {translationList.length === 0 && <p>You have no translations yet.</p>}
            <ul>{ translationList }</ul>
        </section>
    )
}

export default ProfileTranslationHistory