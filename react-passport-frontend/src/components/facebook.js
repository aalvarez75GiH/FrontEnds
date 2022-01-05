import React, {useState} from 'react'
import FacebookLogin from 'react-facebook-login'

const Facebook = () => {
    const [userInfo, setUserInfo] =  useState({
        isLoggedIn: false,
        userID: '',
        name: '',
        email:'',
        picture: ''
    })
    
    const componentClicked = () => {
        console.log('clicked...')
    }

    const responseFacebook = (response) => {
        console.log(response)
    }  

    let fbContent
    
    

    return (
        <div>
        
            { userInfo.isLoggedIn ? fbContent = null :
                <FacebookLogin
                appId="468477668221099"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />
            }
        
        </div>
    )
}

export default Facebook
