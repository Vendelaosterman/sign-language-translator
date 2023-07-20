import { HiOutlineArrowCircleRight } from "react-icons/hi"

const TranslationForm = (props) => {
    return (
        <form>
            <fieldset>
                <input
                    type="text"
                    onChange={props.inputChange}
                    value={props.inputValue}
                ></input>
                <button type="submit" onClick={props.translateClick}><HiOutlineArrowCircleRight size={52} color={"#8a60ff"} /></button>
            </fieldset>
        </form>
    )
}

export default TranslationForm