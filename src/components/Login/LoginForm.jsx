import{ useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { loginUser } from '../../api/user';
import { storageSave } from '../../utils/storage';
import { useNavigate } from "react-router-dom";
import  { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from '../../const/storageKeys';

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    // Local State
    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null)

    // Side Effects
    useEffect(() => {
        if (user !== null) {
            navigate('translator') // change to translator page
        }
    }, [ user, navigate ]) // If empty Deps - Only run 1ce

    // Event Handlers
    const onSubmit = async ({username}) => {
        setLoading(true)
        const [error, userResponse] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }
    // Render Functions
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
            <p>Username</p>
            <form className="loginForm" onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <input 
                    type="text"
                    placeholder="John Doe"
                    {...register("username", usernameConfig)}></input>
                </fieldset>
                { errorMessage }
                <button type="submit" disabled = {loading}>Sign in</button>
                {loading && <p>Logging in...</p>}
                { apiError && <p>{ apiError }</p>}
            </form>
        </>
    )
}

export default LoginForm