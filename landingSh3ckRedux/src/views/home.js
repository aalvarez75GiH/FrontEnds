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

// ************************* Redux imports
import { actionCreators } from '../state'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
// ***************************************************


const Home = () => {

    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ loggedOut, setLoggedOut ] = useState(true)
    const [currentUser, setCurrentUser ] = useState('')
    const [ QASideBarOpen, setQASideBarOpen ] = useState(false)
    const [ mainSideBarOpen, setMainSideBarOpen ] = useState(false)
    const [ loginResponse, setLoginResponse ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ forgotPIN, setForgotPIN ] = useState(false)
    const [ contactSectionOpen, setContactSectionOpen ] = useState(false)
    const [response, setResponse ] = useState(null)

    const dispatch = useDispatch()
    const {  activatingForm, openingRegView, openingForgotPINView  } = bindActionCreators(actionCreators, dispatch)
    const active = useSelector((state) => state.contactSectionState.active)
  
    // Google OAuth States *****************************************
    const [ loginData, setLoginData ] = useState(null)
    const [isSignedIn, setIsSignedIn] = useState(null)
    // console.log(isSignedIn)
    // **************************************************************
    
    
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
                const response = await axios.get('https://intense-atoll-00786.herokuapp.com/api/users/me', {
                    headers:{
                        // 'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}` 
                    } 
                })
                console.log(response.data)
                setCurrentUser(response.data)
                return setLoggedIn(true)
            }
            setLoggedIn(false)
            setLoggedOut(true)
            
            
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
        setQASideBarOpen(false)   
        setLoading(true)
        setTimeout(async() => {
            try {
                const { data } = await axios.post(url_userLoginITC, user)
                console.log(data)
                localStorage.setItem('SH3CK_TOKEN', data.token)
                // ******************************************
                const response = await axios.get('https://intense-atoll-00786.herokuapp.com/api/users/me', {
                    headers:{
                        // 'Content-Type': 'application/json',
                        Authorization: `Bearer ${data.token}` 
                    } 
                })
                console.log(response.data)
                setLoginResponse(response)
                setCurrentUser(response.data)
                setLoading(false)
                setLoggedIn(true)
                setLoggedOut(false)
                console.log('Usuaurio encontrado y hace login')    
            } catch (error) {
                console.log(error)
                setLoginResponse(error.response)
                setLoading(false)
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
            activatingForm(null)
            setMainSideBarOpen(!mainSideBarOpen)
            setLoginResponse(null)
            setContactSectionOpen(false)
        }
        if (loggedIn){
            console.log('pasa por loggedIn')
            localStorage.removeItem('SH3CK_TOKEN')
            setLoginResponse(null)
            activatingForm(null)
            setMainSideBarOpen(!mainSideBarOpen)
            setLoggedIn(false)
            setLoggedOut(true)
            setContactSectionOpen(false)
        }
        
        
    }
 
    const gettingOutOfCheckApp = async() => {
        localStorage.removeItem('SH3CK_TOKEN')
        setIsSignedIn(false)
        setLoggedIn(false)
        activatingForm(null)
        setContactSectionOpen(false)
        openingRegView(false) //action creator
        setLoginData(null)
        setLoginResponse(null)
        setResponse(null)
        
    }
    
 
 
    const toggleQASideBarToOpen = () => {
        setQASideBarOpen(true) 
    }
    const toggleQASideBarToClose = () => {
        console.log('tratando de cerrar')
        setQASideBarOpen(false)
    }

    const toggleMainSideBar = () => {
        setMainSideBarOpen(!mainSideBarOpen)
    } 
    const toggleNotification = () => {
        setResponse(null)
        setLoginResponse(null)
        activatingForm(null)
        setContactSectionOpen(false)
    }
     
 
    const workingSpinner = (option) => {
        console.log(option)
        switch (option) {
            case 'activate':
                setLoading(true)
                break
            case 'close':
                setLoading(false)
                break
            default:
                setLoading(false)
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
            //   console.log(isSignedIn)
              auth.isSignedIn.listen(isSignedIn => {
                  setIsSignedIn(auth.isSignedIn.get())
              })   
              })
          })
          
        }
        const googleTest = async(user, token) => {
            setLoading(true)
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
                    setLoading(false)
                    setLoginData(data)   
                    setCurrentUser(data.fullName)
                    setLoggedIn(true) 
                    setLoggedOut(false)
                    return res.status
                }
            } catch (error) {
                console.log(error)
                console.log(error.response.data)
                setLoading(false)
                setCurrentUser(error.response.data.fullName)
                setLoginData(error.response.data)
                setLoggedIn(true) 
                setLoggedOut(false)
            }
    }

    // ************* Redux Handlers and Helpers ***************\
    // const dispatch = useDispatch()
    // const { changeLanguage } = bindActionCreators(actionCreators, dispatch)
    // const isOpen = useSelector((state) => state.sideBarState.isOpen )
    
    // const toggleSideBar = () => {
    //     // openingSideBar(!isOpen) //action
    // }

    // const toggleLanguage = () => {
    //     changeLanguage('ES') 
    // }

    // *********************************************************
            
    return (
    <>
            
    {
        QASideBarOpen && loggedIn ?
        <QASideBar
        QASideBarOpen={QASideBarOpen}
        toggleQASideBarToClose={toggleQASideBarToClose}
        />
        : 
        loggedIn  ?
        <div className="superContainer">
            <MainSideBar
            mainSideBarOpen={mainSideBarOpen}
            toggleMainSideBar={toggleMainSideBar}
            loggedIn={loggedIn}
            loggedOut={loggedOut}
            handlingSubmitLogOutUser={handlingSubmitLogOutUser}
            username={currentUser}
            loginData={loginData} 
            toggleQASideBarToOpen={toggleQASideBarToOpen}        
            />
            <NavBarForCS
            toggleMainSideBar={toggleMainSideBar} 
            login={ loggedIn }
            /> 
            <CheckSection 
            toggleMainSideBar={toggleMainSideBar}
            // toggleSideBar={ toggleSideBar }  
            login={ loggedIn }
            gettingOutOfCheckApp={gettingOutOfCheckApp}
            />
        </div>
    : null
    }
            {
                QASideBarOpen && !loggedIn ?
                <QASideBar
                QASideBarOpen={QASideBarOpen}
                toggleQASideBarToClose={toggleQASideBarToClose}
                />
                : 

                
                    !loggedIn ? 
                    <>
                        <LoadingSpinner 
                        loading={loading}
                        
                        />
                        {response || loginResponse ?
                        <NotificationBox
                        toggleNotification={toggleNotification} 
                        response={response ? response : loginResponse }
                        responseData={togglingResponseData()} 
                        
                         />
                         :
                         null
                        }
                            
                        <SideBar 
                        toggleQASideBarToClose={toggleQASideBarToClose}
                        toggleQASideBarToOpen={toggleQASideBarToOpen}
                        />
                        
                        { mobil2.screenWidth <= 1098 || mobil ?  
                            <NavBarMobil 
                            toggleMainSideBar={toggleMainSideBar} 
                            login={ loggedIn }
                            
                            
                        /> : <NavBar
                        toggleMainSideBar={toggleMainSideBar}
                        // toggleSideBar={toggleSideBar} 
                        login={ loggedIn }/>
                        }
                        <HeroSection />
                         <VideoSection />
                        <HiwSection />
                        <NextStepSection/>
                        {
                            !loggedIn ?
                            <ContactSection
                            loggedIn={loggedIn}
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