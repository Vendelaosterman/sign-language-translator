import LoginForm from "../components/Login/LoginForm"
import Header from "../components/Header"

const Login = () =>{
    return (
        <>
        <Header></Header>
            <section class="loginPage">
                <div class="icon-wr wr">
                <img src={require("../components/images/sign-language.png")}></img>
                </div>
                <div class="wr">
                    <div class="login-wr">
                        <h1>Log in</h1>
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login