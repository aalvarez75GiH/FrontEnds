import React, {useState} from 'react'
import InterestedUserForm from './interestedUsersForm'
import Loading from '../loading'
import axios from 'axios'
const errorsObject = {
    fullNameError: false,
    emailError: false,
    cityError: false
}


const DataSection = ({
    lightText,
    topLine,
    headLine,
    description,
    darkText,
    // handlingSubmitInterestedUser,
    // toggleFullNameError,
    // toggleEmailError,
    // toggleCityError,
    // loadingUser,
    // errorsObject
    
}) => {
    const [ loadingUser, setLoadingUser ] = useState(false)
    const [ toggling, setToggling ] = useState(false)
    const [ error, setError ] = useState(null)
   
    const url_users = "http://localhost:5000/api/interestedUsers"

    const toggleFullNameError = () => {
        errorsObject.fullNameError = false
        console.log(errorsObject)
        setToggling(!toggling)
        
    } 
    const toggleEmailError = () => {
        errorsObject.emailError = false
        console.log(errorsObject)
        setToggling(!toggling)
    } 
    const toggleCityError = () => {
        errorsObject.cityError = false
        console.log(errorsObject)
        setToggling(!toggling)
    } 

    const handlingSubmitInterestedUser = async(interestedUser) => {
        setLoadingUser(true)
        setTimeout(async()=> {
            try {
                // const { status } = await axios.post(url_users, interestedUser)
                const response = await axios.post(url_users, interestedUser)
                console.log(response)
                if (response.status === 201){
                    setLoadingUser(false)
                    console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
                    return response.status
                } 
            }catch(error) {
                console.log(error.response)
                const gettingData = () => {
                    const whatever = error.response.data.map((error) => {
                        if (error.message === "\"fullName\" is not allowed to be empty"){
                            console.log('pasa por fullNameError')
                            errorsObject.fullNameError = true
                        }
                        if (error.message === "\"email\" is not allowed to be empty"){
                            console.log('pasa por fullNameError')
                            errorsObject.emailError = true
                        }
                        if (error.message === "\"city\" is not allowed to be empty"){
                            console.log('pasa por fullNameError')
                            errorsObject.cityError = true
                        }
                    })
                }
                gettingData()
                console.log(errorsObject)
                showError(error.response.data)
                setLoadingUser(false)    
            }
            
        },3000)
        
    }

    const showError = (message) => {
        setError(message)
        console.log(error)
    }

    
    if (loadingUser){
        return (
            <div className="dataContainer">
                        <div className="dataWrapper">
                            <div className="dataRow">
                                <div className="dataText">
                                    <div className="dataTextWrapper">
                                    <p
                                        style={{
                                            color: `${ lightText ? '#FAD570' : darkText }`
                                        }} 
                                        className="topLine">{ topLine }</p>
                                        <h1
                                        style={{
                                            color: `${ lightText ? '#FFFFFF' : darkText }`
                                        }} 
                                        className="h1Data">{headLine}</h1>
                                        <p 
                                        style={{
                                            color: `${ lightText ? '#FFFFFF' : darkText }`
                                        }}
                                        className="subTitle">{description}</p>
                                    </div>

                                </div>
                                <Loading/>
                            </div>
                                    
                                    
                        </div>
                                    
                    </div>
        )
        
    }
  
    return (
        <div className="dataContainer">
            <div className="dataWrapper">
                <div className="dataRow">
                    <div className="dataText">
                        <div className="dataTextWrapper">
                        <p
                            style={{
                                color: `${ lightText ? '#FAD570' : darkText }`
                            }} 
                            className="topLine">{ topLine }</p>
                            <h1
                            style={{
                                color: `${ lightText ? '#FFFFFF' : darkText }`
                            }} 
                            className="h1Data">{headLine}</h1>
                            <p 
                            style={{
                                color: `${ lightText ? '#FFFFFF' : darkText }`
                            }}
                            className="subTitle">{description}</p>
                        </div>
                            
                    </div>
                        
                    <div className="dataFormWrapper">
                        <div className="optionsWrapper">
                            <div className="notifyMe">
                                <p>Solo notificame</p>
                            </div>
                            <div className="checkAProduct">
                                <p>Quiero chequear un Producto </p>
                            </div>
                        </div>
                        <div className="titleWrapper">
                                <div className="formTitle">
                                    <h1 className="title">¿Quieres saber más de nosotros? </h1>
                                </div>
                                <div className="formDescription">
                                    <p>Al darnos estos datos podremos enviarte más información</p>
                                </div>
                        </div>
                       
                        <InterestedUserForm
                        handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                        toggleFullNameError={toggleFullNameError}
                        toggleEmailError={toggleEmailError}
                        toggleCityError={toggleCityError}
                        errorsObject={errorsObject}
                        />
                    
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}

export default DataSection