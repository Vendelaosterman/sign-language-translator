import withAuth from "../hoc/withAuth"
import { useState} from 'react';
import { useUser } from '../context/UserContext'
import Translation from "../components/Translator/Translation"
import { loginUser } from "../api/user"
import  { translationAdd } from "../api/translation"
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageSave } from "../utils/storage";

const Translator = () =>{

    const [userInput, setUserInput] = useState("")
    const [inputList, setInputList] = useState("")
    const [btnClicked, setBtnClicked] = useState(false)
    const { user, setUser } = useUser()

    document.body.style = "background: white";

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleTranslateClick = (e) =>{
       // send to child
        e.preventDefault()
        setBtnClicked(true)
        let list = userInput.split('')
        setInputList(list)

        addTranslationToHistory()
    }

    const addTranslationToHistory = async() => {

        // fetch existing history 
        //const [userError, userResponse] = await loginUser(user.username)

        // let totalHistory = userResponse.translations; 
        // totalHistory.push(userInput);

        // add new translation 
        const [error, updatedUser] = await translationAdd(user, userInput)
        if (error !== null) {
            return
        }

        // Keep UI state and Server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        // Update context
        setUser(updatedUser)

        console.log(updatedUser)
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
            <button type="submit" onClick={handleTranslateClick}>Translate</button>

        </form>
        {btnClicked && <Translation userInput = {inputList} />}
        </>
    )
}

export default withAuth(Translator)