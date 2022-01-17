import React from 'react'

const Login = ({handlingGUser}) => {

    return (
        <div className="loginContainer">
            <div className="btnContainer">
                <div className="button">
                    <button
                    onClick={handlingGUser}
                    className="googleBtn"
                    >Google</button>
                    {/* <a
                    className="googleBtn"
                    href="http://localhost:5000/auth/google"
                    >Google</a> */}
                </div>
                <div className="button">
                    <button
                        className="facebookBtn"
                        >Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default Login
