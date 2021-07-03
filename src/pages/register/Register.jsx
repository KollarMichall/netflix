import './register.scss'

const Register = () => {
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
            <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Ultimated movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <input type="email" placeholder="email address" />
                <button>Get started</button>
            </div>


        </div>
    )
}

export default Register
