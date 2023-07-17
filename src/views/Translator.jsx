import withAuth from "../hoc/withAuth"
import { useState} from 'react';
import { useUser } from '../context/UserContext'
import Translation from "../components/Translator/Translation"
import { loginUser } from "../api/user"
import  { translationAdd } from "../api/translation"

const Translator = () =>{

    const [userInput, setUserInput] = useState("");
    const [inputList, setInputList] = useState("");
    const [btnClicked, setBtnClicked] = useState(false);
    const { user } = useUser();

    document.body.style = "background: white";

    const handleInputChange = (e) => {
        setUserInput(e.target.value);

    }

    const handleButtonClick = (e) =>{
       // send to child
        e.preventDefault()
        setBtnClicked(true);
        let list = userInput.split('')
        setInputList(list)

        addTranslationToHistory();
        
    }

    const addTranslationToHistory = async() => {

        // fetch existing history 
        const [error1, userResponse] = await loginUser(user.username)

        let totalHistory = userResponse.translations; 
        totalHistory.push(userInput);

        // add new translation 
        const [error2, result] = await translationAdd(user, totalHistory)
        console.log(result);

    }

    return (
        <>
        <form>
            <fieldset>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={userInput}
                ></input>
            </fieldset>
            <button type="submit" onClick={handleButtonClick}>Translate</button>

        </form>
        {btnClicked && <Translation userInput = {inputList} />}
        </>
    )
}

export default withAuth(Translator)