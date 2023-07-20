import { useState } from "react"
import { HiOutlineArrowCircleRight } from "react-icons/hi"
import { useTranslationInput } from "../../context/TranslationInputContext"
import { useUser } from "../../context/UserContext"
import { translationAdd } from "../../api/translation"
import { storageSave } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"

const TranslationForm = () => {

    // Context states
    const { translationInput, setTranslationInput } = useTranslationInput()
    const { user, setUser } = useUser()

    const [letterList, setLetterList] = useState("")
    const [btnClicked, setBtnClicked] = useState(false)

    const handleInputChange = (e) => {
        console.log("in input change")
        setTranslationInput(e.target.value)
    }

    const handleTranslateClicked = (e) => {
        e.preventDefault()
        setTranslationInput(e.target.value)
        console.log(JSON.stringify(translationInput))
        setBtnClicked(true)

        //console.log(translationInput)
        let letters = translationInput.split('')
        setLetterList(letters)

        addTranslationToHistory()
    }

    const addTranslationToHistory = async() => {
        // Add translation to API
        const [error, updatedUser] = await translationAdd(user, translationInput)
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
        <form>
            <fieldset>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={translationInput}
                ></input>
                <button type="submit" onClick={handleTranslateClicked}><HiOutlineArrowCircleRight size={52} color={"#8a60ff"} /></button>
            </fieldset>
        </form>
    )
}

export default TranslationForm