import withAuth from "../hoc/withAuth"
import { useState} from 'react';
import Translation from "../components/Translator/Translation"

const Translator = () =>{

    const [userText, setUserText] = useState("");
    const [inputArr, setInputArr] = useState("");
    const [btnClicked, setBtnClicked] = useState(false);

    const handleInputChange = (e) => {
        setUserText(e.target.value);

    }

    const handleButtonClick = (e) =>{
        e.preventDefault()
        setBtnClicked(true);

        let arr = userText.split('')
        setInputArr(arr)
        
    }

    return (
        <>
        <form>
            <fieldset>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={userText}
                ></input>
            </fieldset>
            <button type="submit" onClick={handleButtonClick}>Translate</button>

        </form>
        {btnClicked && <Translation toChild = {inputArr} />}
        </>
    )
}

export default withAuth(Translator)