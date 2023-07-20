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
import { useTranslationInput } from "../context/TranslationInputContext";

const Translator = () =>{


    const [btnClicked, setBtnClicked] = useState(false)
    const { translationInput, setTranslationInput } = useTranslationInput()

    document.body.style = "background: white";

    return (
        <>
            <section className="translation-wr">
            <TranslationForm/>
                <div className="translation-image-wr">
                    <div className="translation-btn-wr">
                        <button>Translation</button>
                    </div>
                    <div className="img-wr">
                        {btnClicked && <Translation userInput={translationInput} />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default withAuth(Translator)