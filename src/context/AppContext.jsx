import TranslationInputProvider from "./TranslationInputContext"
import UserProvider from "./UserContext"

const AppContext = ({ children }) => {
    return (
        <>
            <UserProvider>
                <TranslationInputProvider>
                { children }
                </TranslationInputProvider>
            </UserProvider>
            {/* <TranslationInputProvider>
                { children }
            </TranslationInputProvider> */}
        </>
        
    )
}

export default AppContext