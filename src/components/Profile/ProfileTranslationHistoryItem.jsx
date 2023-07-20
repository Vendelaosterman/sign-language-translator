
import ImageItem from '../SharedComponents/ImageItem';

const ProfileTranslationHistoryItem = ({ translation }) => {

    return (
        <>
            <div className="translation-history">
                <div className="translation-input-wr">
                    <p>{translation}</p>
                </div>
                {ImageItem(translation)}
            </div>
        </>
    )
}

export default ProfileTranslationHistoryItem