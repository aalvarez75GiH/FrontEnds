import React from 'react'
import Google from '../images/google.png'
import FB from '../images/facebook.png'
import GH from '../images/github.png'
import Facebook from '../components/facebook'


const Login = () => {

    const handlingGoogleAuth = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    const handlingGitHubAuth = () => {
        window.open("http://localhost:5000/auth/github", "_self")
    }

    const handlingFacebookAuth = () => {
        window.open("http://localhost:5000/auth/facebook", "_self")
    }

    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google"
                    onClick={handlingGoogleAuth}
                    >
                        <img src={Google} alt="" className="icon"/>
                        Google
                    </div>
                    {/* <Facebook /> */}
                    <div 
                    onClick={handlingFacebookAuth}
                    className="loginButton facebook">
                        <img src={FB} alt="" className="icon"/>
                        Facebook
                    </div>
                    <div 
                    onClick={handlingGitHubAuth}
                    className="loginButton github">
                        <img src={GH} alt="" className="icon"/>
                        GitHub
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">or</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <button className="submit">Login</button>

                </div>

            </div>
        </div>
    )

}
export default Login
