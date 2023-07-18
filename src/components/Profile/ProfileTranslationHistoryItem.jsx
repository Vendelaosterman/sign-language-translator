
const ProfileTranslationHistoryItem = ({ translation }) => {


        

        const displayImages = translation.replace(/ /g,'').split('').map((value, index) => {
            return <img key={index} src={`/img/${value}.png`}></img>
        })

        return(
            <>
            <li>
            <p>{translation}</p>
            {displayImages}
            </li>
            </>
        )
}

export default ProfileTranslationHistoryItem