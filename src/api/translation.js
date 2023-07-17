import { createHeaders } from '../api/index'
const apiUrl = process.env.REACT_APP_API_URL

export const translationAdd = async (user, totalHistory) => {
    try{
        const response = await fetch(`${apiUrl}/${user.id}`, { //ändra något här eventuellt
            method: 'PATCH', 
            headers: createHeaders(), 
            body: JSON.stringify({
                //username: user.username, 
                translations: totalHistory
            })
        })

        if(!response.ok){
            throw new Error("Could not insert translation")
        }

        const result = await response.json()
        return [null, result]
    }
    catch (error){
        return [error.message, null]

    }
}

export const translationClearHistory = (userId) => {

}