import withAuth from "../hoc/withAuth"
import { useState} from 'react';
import { useUser } from '../context/UserContext'
import Translation from "../components/Translator/Translation"
import { loginUser } from "../api/user"
import  { translationAdd } from "../api/translation"
import {HiOutlineArrowCircleRight} from 'react-icons/hi'
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageSave } from "../utils/storage";
import TranslationForm from "../components/Translator/TranslationForm";

const Translator = () =>{

    const [formInput, setFormInput] = useState("")
    const [inputList, setInputList] = useState("")
    const [btnClicked, setBtnClicked] = useState(false)
    const { user, setUser } = useUser()

    document.body.style = "background: white";

    const handleInputChange = (e) => {
        setFormInput(e.target.value)
    }

    // const handleTranslateClick = (e) =>{
    //    // send to child
    //     e.preventDefault()
    //     setBtnClicked(true)
    //     let list = userInput.split('')
    //     setInputList(list)

    //     addTranslationToHistory()
    // }
    
    // const addTranslationToHistory = async() => {
    //     const [error, updatedUser] = await translationAdd(user, userInput)
    //     if (error !== null) {
    //         return
    //     }

    //     // Keep UI state and Server state in sync
    //     storageSave(STORAGE_KEY_USER, updatedUser)
    //     // Update context
    //     setUser(updatedUser)

    //     console.log(updatedUser)
    // }

    const addTranslationToHistory = async() => {
        const [error, updatedUser] = await translationAdd(user, formInput)
        if (error !== null) {
            return
        }

        // Keep UI state and Server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        // Update context
        setUser(updatedUser)

        console.log(updatedUser)
    }

    // Event handler to bind to input from TranslationForm
    const handleTranslateClicked = (e) => {
        e.preventDefault()
        setFormInput(e.target.value)

        setBtnClicked(true)
        console.log(formInput)
        let letters = formInput.split('')
        setInputList(letters)

        addTranslationToHistory()
    }

    return (
        <>
            <section className="translation-wr">
            <TranslationForm inputValue={setFormInput} inputChange={handleInputChange} translateClick={handleTranslateClicked}/>
                {/* <form>
                    <fieldset>
                        <input
                            type="text"
                            onChange={handleInputChange}
                            value={userInput}
                        ></input>
                        <button type="submit" onClick={handleTranslateClick}><HiOutlineArrowCircleRight size={52} color={"#8a60ff"} /></button>
                    </fieldset>
                </form> */}
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