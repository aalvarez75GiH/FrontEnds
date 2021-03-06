import React, { useState, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { infoContact } from '../../utils/data'
// import '../../bookface.css'

const GoogleAuth5 = ({googleTest, language}) => {

    // var googleUser = {}
    
    useEffect(()=> {
        window.gapi.load('auth2', () => {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            const auth = window.gapi.auth2.getAuthInstance()
            // console.log(auth)
            const element = document.getElementById('googleAuth5')
            auth.attachClickHandler(element, {},
                function(googleUser) {
                    console.log(googleUser)
                    let response = googleUser.getAuthResponse()
                    console.log(response)
                    console.log(response.id_token)
                    googleTest(googleUser, response.id_token)
            })
        },[])
    })

    return (
        <>
        {/* <div className="googleAuthContainer"> */}
            <div
            id="googleAuth5"
            >
                <div className="googleIcon">
                <FcGoogle className="fcGoogle"/>

                </div>
                <div className="googleAuth5_label">{language === 'ES' ? infoContact.loginFormGoogleButton : infoContact.loginFormGoogleButton_EN}</div></div>
                {/* {language === 'ES' ? infoContact.loginFormGoogleButton : infoContact.loginFormGoogleButton_EN}</div> */}
        {/* </div>   */}

         
        
        </>
    )
    
    // return isSignedIn ? <h1>You are logged in</h1> : <h1>You are NOT logged in</h1>
  
}

export default GoogleAuth5