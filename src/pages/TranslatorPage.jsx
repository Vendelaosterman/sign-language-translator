import withAuth from "../hoc/withAuth"
import { useState } from 'react';
import { useUser } from '../context/UserContext'
import  { translationAdd } from "../api/translation"
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageSave } from "../utils/storage";
import TranslationForm from "../components/Translator/TranslationForm";
import ImageItem from "../components/SharedComponents/ImageItem";
import TranslationOutput from "../components/Translator/TranslationOutput"

const TranslatorPage = () =>{

    const [formInput, setFormInput] = useState("")
    const [newInput, setNewInput] = useState("")
    const [btnClicked, setBtnClicked] = useState(false)
    const { user, setUser } = useUser()

    document.body.style = "background: white";

    const handleInputChange = (e) => {
        setFormInput(e.target.value)
    }

    const addTranslationToHistory = async() => {

        const [error, updatedUser] = await translationAdd(user, formInput)
        if (error !== null) {
            return
        }

        // Keep UI state and Server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)

        // Update context
        setUser(updatedUser)
    }




    // Event handler to bind to input from TranslationForm

    const handleTranslateClicked = (e) => {
      e.preventDefault();
      setFormInput(e.target.value);
      setBtnClicked(true);
      setNewInput(formInput);
      addTranslationToHistory();

    };


    return (

        <>
            <section className="translation-wr">
            <TranslationForm inputChange={handleInputChange} translateClick={handleTranslateClicked}/>
                {/* <div className="translation-image-wr">
                    <div className="translation-btn-wr">
                        <button>Translation</button>
                    </div>
                    <div className="img-wr">
                    {btnClicked && ImageItem(newInput)}
                    </div>
                </div> */}
                <TranslationOutput btnClicked={btnClicked} phrase={newInput}/>
            </section>
        </>
    )

}





export default withAuth(TranslatorPage)