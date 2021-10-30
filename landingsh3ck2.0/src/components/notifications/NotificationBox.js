import React from 'react'
import successImage from '../../images/ok_success_icon.svg'
import foundImage from '../../images/ok_success_verified_icon.svg'

const NotificationBox = ({ response, responseData, toggleNotification }) => {
    console.log(response)

    if (response){
        if (response.status === 409){
            return (
            <div className="notificationContainer">
                <div className="notificationWrapper">
                    <img src={foundImage} alt="successImage" />
                    <div className="notificationName"> 
                        <span className="notificationSpan">
                            <b>Hola {''}{response.data}</b>    
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        {responseData.errorMessage}
                    </div>
                    <button className="notificationBtn"
                    onClick={toggleNotification}
                    >Continuar</button>
                </div>
            </div>   
            )
        }
        if (response.status === 201){
            return (
            <div className="notificationContainer">
                <div className="notificationWrapper">
                    <img src={successImage} alt="successImage" />
                    <div className="notificationName">
                        <span className="notificationSpan">
                            <b>Hola {''}{response.data}</b>    
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        {responseData.successMessage}
                    </div>
                    <button
                    className="notificationBtn"
                    onClick={toggleNotification}
                    >Continuar</button>
                </div>
                
            </div>
            )
        }
        if (response.status === 500) {
            return (
                <div>
                    <b>ha ocurrido interno en nuestro servidor, pedimos disculpas...</b>
                </div>
            )
        }
    }
    return null     
   
}

export default NotificationBox
