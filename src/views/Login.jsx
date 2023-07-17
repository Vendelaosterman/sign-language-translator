import LoginForm from "../components/Login/LoginForm"

const Login = () =>{

    return (
      <section className="loginPage">
        <div className="icon-wr wr">
          <img src={require("../components/images/sign-language.png")}></img>
        </div>
        <div className="wr">
          <div className="login-wr">
            <h1>Log in</h1>
            <LoginForm></LoginForm>
          </div>
        </div>
      </section>
    );
}

export default Login