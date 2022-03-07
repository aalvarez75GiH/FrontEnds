import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
import MainSideBar from '../components/mainSideBar/mainSideBar'
import HeroSection from '../components/heroSection/heroSection'
import VideoSection from '../components/videoSection/videoSection'
import HiwSection from '../components/hiwSection/hiwSection'
import useMobilDetection from '../utils/mobilDetection'
import useMobilDetect from '../utils/mobilHook'
import NavBarMobil from '../components/navBar/navBarMobil'
import NavBarForCS from '../components/navBar/navBarForCS'
import QASideBar from '../components/sideBars/QASideBar'
import ContactSection from '../components/contactSection/contactSection'
import NextStepSection from '../components/nextStepSection.js/nextStepSection'
import FooterSection from '../components/footerSection/footerSection'
import LoadingSpinner from '../utils/loadingSpinner'
import CheckSection from '../components/checkSection/checkSection'
import NotificationBox from '../components/notifications/NotificationBox'
import { responseDataInterested, responseDataRegister, responseDataLogin, responseDataNewPIN } from '../components/notifications/notificationData'
import { verifyingTokenRequest } from '../requestsToApi'
// ************************* Redux imports
import { actionCreators } from '../state'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
// ***************************************************


const Home = () => {

    
    const [response, setResponse ] = useState(null)
    // Google OAuth States *****************************************
    const [ loginData, setLoginData ] = useState(null)
    const [isSignedIn, setIsSignedIn] = useState(null)
    // **************************************************************
    
    //  ****************Redux Actions and State Consumption **********************
    const dispatch = useDispatch()
    const {  
        activatingForm, openingRegView, 
        activatingSpinner, openingQASideBar, 
        gettingCurrentUser, gettingLoginResponseData,
        openingContactSection,handlingIsLoggedIn,handlingIsLoggedOut,
        openingMainSideBar,  
    } = bindActionCreators(actionCreators, dispatch)
    const active = useSelector((state) => state.contactSectionState.active)
    const QASideBarOpen = useSelector((state) => state.sideBarState.QASideBarOpen)
    const loginResponse = useSelector((state) => state.homeState.loginResponse)
    const forgotPIN = useSelector((state) => state.contactSectionState.forgotPIN)
    const loggedIn = useSelector((state) => state.homeState.loggedIn)
    const mainSideBarOpen = useSelector((state) => state.homeState.mainSideBarOpen)
    // const loggedOut = useSelector((state) => state.homeState.loggedOut)
    
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    // const url_userLogin = "http://192.168.1.102:5000/api/users/login"
    const url_userLoginITC = "https://intense-atoll-00786.herokuapp.com/api/users/login"
    let auth
    useEffect(() => {
        gettingTokenForLocalSignIn()
        insertGapiScript()
    },[])

    const gettingTokenForLocalSignIn = () => {
        const getToken = async() => {
            const token = localStorage.getItem('SH3CK_TOKEN')
            if (token){
                const response = await verifyingTokenRequest(token)
                console.log(response.data)
                gettingCurrentUser(response.data)
                return handlingIsLoggedIn(true)
            }
            handlingIsLoggedIn(false)
            handlingIsLoggedOut(true) 
        }   
        getToken()
    }

    // **************************************************************

    const handlingContactSectionResponse = (response) => {
        setResponse(response)
    }
    
    const togglingResponseData = () => {
        if (response && active === 'interested'){
            return responseDataInterested
        }
        if (response && forgotPIN){
            return responseDataNewPIN
        }
        if (response && active === 'check'){
            return responseDataRegister
        }
        if (loginResponse && active === 'check'){
            return responseDataLogin
        } 
    }
    // ***************************************************************


    const handlingSubmitLoginUser = async(user) => {
        openingQASideBar(false) //action  
        activatingSpinner(true) //action
        setTimeout(async() => {
            try {
                const { data } = await axios.post(url_userLoginITC, user)
                console.log(data)
                localStorage.setItem('SH3CK_TOKEN', data.token)
                const response = await verifyingTokenRequest(data.token)
                console.log(response)
                gettingLoginResponseData(response)  //action
                activatingSpinner(false) //action
                handlingIsLoggedIn(true)
                handlingIsLoggedOut(false)
                console.log('Usuaurio encontrado y hace login')    
            } catch (error) {
                console.log(error)
                gettingLoginResponseData(error.response)
                activatingSpinner(false) //action
            }
        },3000)
        
    }

    const handlingSubmitLogOutUser = async() => {
        
        if (isSignedIn) {
            console.log('pasa por isSignedIn')
            const auth = window.gapi.auth2.getAuthInstance()
            await auth.signOut()
            setLoginData(null)
            setIsSignedIn(false)
            activatingForm(null) //action
            openingMainSideBar(!mainSideBarOpen)  //action
            gettingLoginResponseData(null) //action
            openingContactSection(false) //action
        }
        if (loggedIn){
            console.log('pasa por loggedIn')
            localStorage.removeItem('SH3CK_TOKEN')
            gettingLoginResponseData(null) //action
            activatingForm(null) //action
            openingMainSideBar(!mainSideBarOpen) //action
            handlingIsLoggedIn(false)
            handlingIsLoggedOut(true)
            openingContactSection(false) //action
        }
        
        
    }
 
    const gettingOutOfCheckApp = async() => {
        localStorage.removeItem('SH3CK_TOKEN')
        setIsSignedIn(false)
        handlingIsLoggedIn(false)
        activatingForm(null) //action
        openingContactSection(false) //action
        openingRegView(false) //action 
        setLoginData(null)
        gettingLoginResponseData(null) //action
        setResponse(null)
        
    }
    
    // const toggleMainSideBar = () => {
    //     openingMainSideBar(!mainSideBarOpen) //action
    // } 

    const toggleNotification = () => {
        setResponse(null)
        gettingLoginResponseData(null) //action
        activatingForm(null) //action
        openingContactSection(false) //action
    }
     
 
    const workingSpinner = (option) => {
        console.log(option)
        switch (option) {
            case 'activate':
                activatingSpinner(true) //action
                break
            case 'close':
                activatingSpinner(false) //action
                break
            default:
                activatingSpinner(false) //action
                break;
        }
        
    } 
    

  
  //  ************* Google OAuth Processes and functions (with googleAuth5) ****************

 
        const insertGapiScript = () => {
            const script = document.createElement('script')
            script.src = "https://apis.google.com/js/platform.js"
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
              }).then(()=> {
              auth = window.gapi.auth2.getAuthInstance()
              const isSignedIn = auth.isSignedIn.get()
              setIsSignedIn(isSignedIn)
              auth.isSignedIn.listen(isSignedIn => {
                  setIsSignedIn(auth.isSignedIn.get())
              })   
              })
          })
          
        }

        const googleTest = async(user, token) => {
        activatingSpinner(true)
        try {
            console.log('Sending request to BackEnd api...')
            console.log(token)
            const res = await axios.post('https://intense-atoll-00786.herokuapp.com/api/extUsers/google', {
                token,
                headers:{
                    'Content-Type': 'application/json',
                },
            })
            console.log(res)
            // const res = await axios.post('http://localhost:5000/api/extUsers/google',token)
            const data = res.data
            if (res.status === 201){
                console.log(data)
                activatingSpinner(false) //action
                setLoginData(data)   
                gettingCurrentUser(data.fullName)
                handlingIsLoggedIn(true) 
                handlingIsLoggedOut(false)
                return res.status
            }
        } catch (error) {
            console.log(error)
            console.log(error.response.data)
            activatingSpinner(false) //action
            gettingCurrentUser(error.response.data.fullName)
            setLoginData(error.response.data)
            handlingIsLoggedIn(true) 
            handlingIsLoggedOut(false)
        }
}

    return (
    <>
            
    {
        QASideBarOpen && loggedIn ?
        <QASideBar/>
        : 
        loggedIn  ?
        <div className="superContainer">
            <MainSideBar
            handlingSubmitLogOutUser={handlingSubmitLogOutUser}
            loginData={loginData}       
            />
            <NavBarForCS /> 
            <CheckSection 
            gettingOutOfCheckApp={gettingOutOfCheckApp}
            />
        </div>
    : null
    }
            {
                QASideBarOpen && !loggedIn ?
                <QASideBar />
                : 
                    !loggedIn ? 
                    <>
                        <LoadingSpinner/>

                        {response || loginResponse ?
                        <NotificationBox
                        toggleNotification={toggleNotification} 
                        response={response ? response : loginResponse }
                        responseData={togglingResponseData()} 
                        
                         />
                         :
                         null
                        }
                            
                        <SideBar />
                        
                        { mobil2.screenWidth <= 1098 || mobil ?  
                            <NavBarMobil /> 
                        : <NavBar />
                        }
                        <HeroSection />
                         <VideoSection />
                        <HiwSection />
                        <NextStepSection/>
                        {
                            !loggedIn ?
                            <ContactSection
                            isSignedIn={isSignedIn}
                            handlingSubmitLoginUser={ handlingSubmitLoginUser}
                            toggleNotificationLogin={toggleNotification}
                            googleTest={googleTest}
                            workingSpinner={workingSpinner}
                            handlingContactSectionResponse={handlingContactSectionResponse}
                            />
                            :
                            null
                        }
                        <FooterSection/> 
                        
                    </>
                    : null
                        
             }

            
   
        
    </>
    )
}


export default Home