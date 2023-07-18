import withAuth from "../hoc/withAuth"
import { useState} from 'react';
import { useUser } from '../context/UserContext'
import Translation from "../components/Translator/Translation"
import { loginUser } from "../api/user"
import  { translationAdd } from "../api/translation"
import {HiOutlineArrowCircleRight} from 'react-icons/hi'

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
            <section className="translation-wr">
                <form>
                    <fieldset>
                        <input
                            type="text"
                            onChange={handleInputChange}
                            value={userInput}
                        ></input>
                        <button type="submit" onClick={handleButtonClick}><HiOutlineArrowCircleRight size={52} color={"#8a60ff"} /></button>
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