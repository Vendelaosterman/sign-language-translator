import ImageItem from "../SharedComponents/ImageItem";

const TranslationOutput = ({btnClicked, phrase}) => {

    return(
        <div className="translation-image-wr">
            <div className="translation-btn-wr">
                <button>Translation</button>
            </div>
            <div className="img-wr">
                {btnClicked && ImageItem(phrase)}
            </div>
        </div>
    )

}

export default TranslationOutput;