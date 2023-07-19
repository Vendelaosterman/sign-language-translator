import withAuth from "../hoc/withAuth"
import { useState} from 'react';
import { useUser } from '../context/UserContext'
import Translation from "../components/Translator/Translation"
import { loginUser } from "../api/user"
import  { translationAdd } from "../api/translation"
import {HiOutlineArrowCircleRight} from 'react-icons/hi'
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
        // add new translation 
        const [error, updatedUser] = await translationAdd(user, userInput)
        if (error !== null) {
            return
        }

        // Keep UI state and Server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        // Update context
        setUser(updatedUser)
    }

    return (
        <>
            <section className="translation-wr">
                <form>
                    <fieldset>
                        <input
                            type="text"
                            onChange={handleInputChange}
                            value={userInput}
                        ></input>
                        <button type="submit" onClick={handleTranslateClick}><HiOutlineArrowCircleRight size={52} color={"#8a60ff"} /></button>
                    </fieldset>
                </form>
                <div className="translation-image-wr">
                    <div className="translation-btn-wr">
                        <button>Translation</button>
                    </div>
                    <div className="img-wr">
                        {btnClicked && <Translation userInput={inputList} />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default withAuth(Translator)