import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations.toReversed().slice(0, 10).map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation} translation={ translation }/>
        )

    return (
        <>
        <section className="translation-history-wr">
            {translationList.length === 0 && <p>You have no translations yet.</p>}
            { translationList }
        </section>
        </>    
    )
}

export default ProfileTranslationHistory