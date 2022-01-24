import React, {useState} from 'react'
import { GoogleLogin, GoogleLogout} from 'react-google-login'

const GOOGLE_APP_CLIENT_ID = '257358209041-oje195aop7ppkokdlmdf33676hdl2dbk.apps.googleusercontent.com'
const GOOGLE_APP_CLIENT_ID_OLD = '893855487421-l0l6ejqncjds8145a9icsgurvsuhv37o.apps.googleusercontent.com'



const GoogleAuthButtons = ({
    handleGoogleLogin,
    handleGoogleLogout,
    handleGoogleFailure,
    showloginButton,
    showlogoutButton
}) => {

   
    return (
        <div>

            {showloginButton ? 
            <GoogleLogin
            clientId={GOOGLE_APP_CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleFailure}
            cookiePolicy={'single_host_origin'}
            // isSignedIn={true}
            />    
            :null}
            {showlogoutButton ? 
            <GoogleLogout
            clientId={GOOGLE_APP_CLIENT_ID}
            buttonText="Sign Out"
            onLogoutSuccess={handleGoogleLogout}
            />    
            :null}
            
        </div>
    )
}

export default GoogleAuthButtons
