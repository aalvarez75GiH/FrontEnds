import React, { useState } from 'react'
import  { motion } from 'framer-motion'
import InterestedUsersForm from '../contactSection/interestedUserForm'
import LoadingSpinner from '../../utils/loadingSpinner' 
import OptionsForms from './optionsForms'
import LoginForm from './loginForm'
import NotificationBox from '../notifications/NotificationBox'
import axios from 'axios'
import FormHeader from './formHeader'


const ContactSection = ({
    id,
    // lightText,
    // topLine,
    // headLine,
    // description,
    // darkText,
    loggedIn,
    handlingSubmitLoginUser,
    loginResponse,
    toggleNotificationLogin
    // loginFromNavBar

}) => {
   
    const [ upLoadingUser, setUpLoadingUser ] = useState(false)
    const [ active , setActive ] = useState('interested') 
    const [ regView, setRegView ] = useState(false)
    // const [errorData, setErrorData ] = useState(null) 
    const [response, setResponse ] = useState(null)
    const url_interestedUsers = "http://localhost:5000/api/interestedUsers"
    const url_users = "http://localhost:5000/api/users"

    const responseData = {
        errorCode: 409,
        errorMessage:`Ya tus datos fueron suministrados anteriormente y nos contenta. Si quieres chequear un producto haz click en Quiero chequear un producto`,
        successCode: 201,
        successMessage:`Listo, que bueno que estas interesado. Te estaremos notificando pronto sobre nuestra app`
    }
    const responseDataRegister = {
        errorCode: 409,
        errorMessage:`Ya te teníamos registrado anteriormente . Si quieres chequear un producto solo inicia sesión y haz click en Quiero chequear un producto`,
        successCode: 201,
        successMessage:`Listo, te hemos registrado. Si deseas chequear un producto solo haz click en Quiero chequear un producto`
    }
    const responseDataLogin = {
        errorCode: 400,
        errorMessage:` No te encontramos en nuestra Base de datos. Verifica tu correo electrónico o contraseña e intenta de nuevo`,
        successCode: 201,
        successMessage:`Bienvenido, ¿Te gustaría chequear un producto?`
    }
    
    console.log(loginResponse)
    // console.log(loggedIn)
    // const toggleBackDrop = () => {
    //     setExpansion(true)
    //     setTimeout(()=>{
    //         setExpansion(false)
    //     },expandingTransition.duration * 1000 - 1500)
    // }

    const switchToCheck = () => {
        // toggleBackDrop()
        // setTimeout(()=> {
            setActive('check')
            setRegView(false)
        // },400)
        
    }

    const switchToSignIn = () => {
        // toggleBackDrop()
        // console.log('just notifying...')
        // setTimeout(()=> {
            setActive('interested')
        // },400)
        
    }

    // const backDropVariants = {
    //     expanded: {
    //         width: '100%',
    //         height: '700px',
    //     },
    //     collapsed: {
    //         width: '50%',
    //         height: '700px'
    //     }
    // }

    // const expandingTransition = {
    //     type: "spring",
    //     duration: 2,
    //     stiffness: 50
    // }

    const toggleRegView = () => {
        setResponse(null)
        setRegView(true)
    }

    const toggleNotification = () => {
        setResponse(null)
    }

    const handlingLoginUser = (values) => {
        setUpLoadingUser(true)
        setTimeout(async() => {
            handlingSubmitLoginUser(values)
            setUpLoadingUser(false)
        },2000)
    } 

    const handlingSubmitInterestedUser = (interestedUser) => {
        
        setUpLoadingUser(true)
        setTimeout(async()=> {
            try {
                const response = await axios.post(url_interestedUsers, interestedUser)
                    console.log(response)
                    if (response.status === 201){
                        setResponse(response)
                        setUpLoadingUser(false)
                        console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
                        return response.status
                    }
            } catch (error) {
                console.log(error.response)
                setUpLoadingUser(false)
                // setErrorData(error.response)
                setResponse(error.response)
            }
        },2000)
        
    }

    // console.log(errorData)

    const handlingSubmitUser = (user) => {
        setUpLoadingUser(true)
         setTimeout(async()=> {
            try {
                const response = await axios.post(url_users, user)
                    console.log(response)
                    if (response.status === 201){
                        setResponse(response)
                        setUpLoadingUser(false)
                        setRegView(false)
                        console.log('Gracias por registrarte')
                        return response.status
                    }
            } catch (error) {
                console.log(error)
                setUpLoadingUser(false)
                setResponse(error.response)
            }
        },2000)
    } 



    if (upLoadingUser){
        return (
            <div 
            id={id}
            className="contactContainer">
                <div className="contactWrapper">
                    <motion.div className="contactInfo"></motion.div>
                    <div className="contactForms">
                        <LoadingSpinner/>
                        <OptionsForms/>
                        <FormHeader/>
                        { active === 'interested' && loggedIn ? <InterestedUsersForm/>:null}
                        { active === 'interested' && loggedIn === false ? <InterestedUsersForm/>:null}
                        { active === 'check' && loggedIn  ? <InterestedUsersForm/>:null}
                        { active === 'check' && loggedIn === false  ? <LoginForm/>:null}
                    </div>
                </div>
            </div>
        )    
    }
    console.log(active)
    return (
        <div 
        id={id}
        className="contactContainer">
            <div className="contactWrapper">
                <motion.div 
                className="contactInfo"
                // variants={backDropVariants}
                // animate={expansion ? 'expanded' : 'collapsed'}
                // transition={expandingTransition}
                >

                </motion.div>
                <div className="contactForms">
                {response && active === 'interested' ? 
                 <NotificationBox
                 toggleNotification={toggleNotification} 
                 response={response}
                 responseData={responseData}
                 />    
                : 
                null 
                }

                {response && active === 'check' ? 
                 <NotificationBox
                 toggleNotification={toggleNotification} 
                 response={response}
                 responseData={responseDataRegister}
                 />    
                : 
                null 
                }
                {loginResponse ? 
                 <NotificationBox
                 toggleNotification={toggleNotification} 
                 response={loginResponse}
                 responseData={responseDataLogin}
                 toggleNotificationLogin={toggleNotificationLogin}
                 />    
                : 
                null 
                }
                    <OptionsForms
                    active={active === 'interested' ? 'interested' : 'signUp' } 
                    switchToSignIn={switchToSignIn}
                    switchToCheck={switchToCheck}
                    />
                    <FormHeader
                    active = {active}
                    loggedIn={loggedIn}
                    regView={regView}
                    />
                
                    
                    { active === 'interested' && loggedIn ? 
                     <>
                     <InterestedUsersForm 
                     handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                     />
                    {/* <NotificationBox
                    toggleNotification={toggleNotification} 
                    response={response}
                    responseData={responseData}
                    /> */}
                     </>
                     
                     :
                     null
                    }
                    { active === 'interested' && !loggedIn ? 
                     <>
                     <InterestedUsersForm 
                     handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                     />
                    {/* <NotificationBox
                    toggleNotification={toggleNotification}
                    response={response}
                    responseData={responseData}
                    /> */}
                    </>                     
                     :
                     null
                    }
                    
                    { active === 'check' && loggedIn  ? 
                    <>
                    <InterestedUsersForm
                    handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                    />
                    {/* <NotificationBox
                    toggleNotification={toggleNotification}
                    response={response}
                    responseData={responseData}
                    /> */}
                    </>
                    :
                    null
                    }
                    { active === 'check' && loggedIn === false  ? 
                    <LoginForm
                    regView={regView}
                    toggleRegView={toggleRegView}
                    handlingSubmitUser={handlingSubmitUser}
                    handlingLoginUser={handlingLoginUser}
                    />
                    :
                    null
                    // <RegisterForm handlingSubmitUser={handlingSubmitUser}/>
                    }

                    {/* <NotificationBox
                    response={response}
                    responseData={responseData}
                    /> */}
                    
                    
                    
                     
                </div>
                

            </div>
            
        </div>
    )
}

export default ContactSection

