import{ useForm } from 'react-hook-form'
import {useState} from 'react'
import { loginUser } from '../../api/user'
import { storageSave } from '../../utils/storage'

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {

    const {
        register,
        handleSubmit, 
        formState: { errors }
    } = useForm()

    const [loading, setLoading] = useState(false)
    const [ apiError, setApiError ] = useState(null)

    const onSubmit = async ({username}) => {
        setLoading(true)
        const [error, user] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if (user !== null) {
            storageSave('translator-user', user)
        }
        setLoading(false)
    }

    const errorMessage = (() => {
        if(!errors.username){
            return null
        }

        if(errors.username.type === 'required'){
            return <span>Username is required</span>
        }

        if(errors.username.type === 'minLength'){
            return <span>Username is too short (min 3)</span>
        }
    })()

    return(
        <>
            <h2>Whats your name?</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input 
                    type="text"
                    placeholder="John Doe"
                    {...register("username", usernameConfig)}></input>
                </fieldset>
                { errorMessage }
                <button type="submit" disabled = {loading}>Continue</button>
                {loading && <p>Logging in...</p>}
                { apiError && <p>{ apiError }</p>}
            </form>
        </>
    )
}

export default LoginForm