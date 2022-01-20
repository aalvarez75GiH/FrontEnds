import React, {useState} from 'react'
import { GoogleLogin, GoogleLogout} from 'react-google-login'

const GOOGLE_APP_CLIENT_ID = '257358209041-oje195aop7ppkokdlmdf33676hdl2dbk.apps.googleusercontent.com'



const GoogleAuthButtons = () => {

    const [ loginData, setLoginData ] = useState(null)
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const handleLogin = async(googleData) => {
        console.log('Login Success:', googleData.profileObj);
        try {
            console.log('handling Login with Google...')
            console.log(googleData)
            const res = await fetch('http://localhost:5000/api/extUsers/google',{
                method: 'POST',
                body: JSON.stringify({
                  token: googleData.tokenId,
                }),
                headers:{
                  'Content-Type': 'application/json'
                }
              })
              const data = await res.json()
              setLoginData(data)   
              setShowloginButton(false)
              setShowlogoutButton(true) 
        } catch (error) {
            console.log(error)
            setShowloginButton(false)
            setShowlogoutButton(true)
        }
    }

    const handleFailure = (res) => {
        console.log('handling Failure...', res)
    }

    const handleLogout = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    }


    return (
        <div>

            {showloginButton ? 
            <GoogleLogin
            clientId={GOOGLE_APP_CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />    
            :null}
            {showlogoutButton ? 
            <GoogleLogout
            clientId={GOOGLE_APP_CLIENT_ID}
            buttonText="Sign Out"
            onLogoutSuccess={handleLogout}
            />    
            :null}
            
        </div>
    )
}

export default GoogleAuthButtons
