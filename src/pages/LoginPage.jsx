import LoginForm from "../components/Login/LoginForm"

const Login = () =>{

    document.body.style = "background: linear-gradient(to bottom, #8a60ff, #f8dc95)";

    return (
      <section className="loginPage">
        <div className="icon-wr wr">
          <img src="/img/sign-language.png"></img>
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