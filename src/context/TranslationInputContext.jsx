import { createContext, useContext, useState } from "react";
import { storageRead } from "../utils/storage";
import { STORAGE_KEY_TRANSLATION_INPUT } from "../const/storageKeys";

const TranslationInputContext = createContext()

export const useTranslationInput = () => { 
    return useContext(TranslationInputContext)
}

const TranslationInputProvider = ({children}) => {
    const [translationInput, setTranslationInput] = useState(storageRead(STORAGE_KEY_TRANSLATION_INPUT))

    const state = {
        translationInput,
        setTranslationInput
    }

    return (
        <TranslationInputContext.Provider value={ state }>
            { children }
        </TranslationInputContext.Provider>
    )
}

export default TranslationInputProvider