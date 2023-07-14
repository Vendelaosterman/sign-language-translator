import{ useForm } from 'react-hook-form'
import {useState} from 'react'
import { loginUser } from '../../api/user'

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {

    const {
        register,
        handleSubmit, 
        formState: { errors}
    } = useForm()

    const [loading, setLoading] = useState(false);

    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, user] = await loginUser(username)
        console.log("Error: ", error)
        console.log("user: ", user)
        setLoading(false);
    }

    console.log(errors);

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
            <form class="loginForm" onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <input 
                    type="text"
                    placeholder="John Doe"
                    {...register("username", usernameConfig)}></input>
                </fieldset>
                { errorMessage }
                <button type="submit" disabled = {loading}>Sign in</button>
                {loading && <p>Logging in...</p>}
            </form>
        </>
    )
}

export default LoginForm