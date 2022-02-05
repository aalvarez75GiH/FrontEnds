import React, {useState, useEffect} from 'react'


const GoogleAuth2 = () => {
     
    const [isSignedIn,setIsSignedIn] = useState(false) 

    const insertGapiScript = () => {
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/platform.js'
        script.onload = () => {
            initializeGooglesignIn()
        }
        document.body.appendChild(script)
    } 

    const initializeGooglesignIn = () => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
              client_id: '915460618193-dcl1a1f3en6f3h22evu9jqk2aqdh1lcj.apps.googleusercontent.com',
              scope:'profile'
            })
            console.log('Api initiated...')

            window.gapi.load('signin2', ()=> {
                const params = {
                    onSucess: () => {
                        console.log('user has finished signing in...')
                    }
                }
                window.gapi.signin2.render('loginButton', params )
            })
        })
    }

    useEffect(()=> {
        console.log('Loading...')
        insertGapiScript()
    })

    // const handlingOnClick = () => {
    //     console.log('You made click...')
    //     setIsSignedIn(!isSignedIn)
    //     console.log(isSignedIn)
    // }
   
    // renderGoogleAuthButton() {
    //     if (this.state.isSignedIn === null) {
    //         return <button 
    //         onClick={this.onSignOutClick}
    //         className="googleAuthBtn">Undetermined</button>
    //     }else if (this.state.isSignedIn){
    //         return (
    //             <button 
    //             onClick={this.onSignOutClick}
    //             className="googleAuthBtn">Sign Out</button>
    //         )
    //     }else{
    //         return (
    //             <button 
    //             onClick={this.onSignInClick}
    //             className="googleAuthBtn">Sign In with Google</button>
    //         )
    //     }
    // }
    
    return(
        <>
        <div className="googleAuthContainer">
            <div
            id="loginButton"
            ></div>
        </div>    
        
        </>
    )
}

export default GoogleAuth2