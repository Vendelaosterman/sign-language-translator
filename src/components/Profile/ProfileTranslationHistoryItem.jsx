
import DisplayImages from '../SharedComponents/DisplayImages';

const ProfileTranslationHistoryItem = ({ translation }) => {

    return (
        <>
            <div className="translation-history">
                <div className="translation-input-wr">
                    <p>{translation}</p>
                </div>
                {DisplayImages(translation)}
            </div>
        </>
    )
}

export default ProfileTranslationHistoryItem