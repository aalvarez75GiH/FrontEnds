import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
// import StyledSideBar from '../components/sideBar/styledSideBar'
import HeroSection from '../components/heroSection/heroSection'
// import StyledNavBar from '../components/navBar/styledNavbar'
// import StyledHeroSection from '../components/heroSection/styledHeroSection'
import VideoSection from '../components/videoSection/videoSection'
import HiwSection from '../components/hiwSection/hiwSection'
import { infoHero, infoVideo, infoData } from '../utils/data'
import { infoHiW  } from '../components/hiwSection/data'
import useMobilDetection from '../utils/mobilDetection'
import useMobilDetect from '../utils/mobilHook'
import NavBarMobil from '../components/navBar/navBarMobil'
import DataSection from '../components/dataSection/dataSection'
// const errorsObject = {
//     fullNameError: false,
//     emailError: false,
//     cityError: false
// }

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ login, setLogin ] = useState(false)
    // const [ error, setError ] = useState(null)
    // const [ loadingUser, setLoadingUser ] = useState(false)
    // const [ toggling, setToggling ] = useState(false)
    
   
    // const url_users = "http://localhost:5000/api/interestedUsers"
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    

    // const toggleFullNameError = () => {
    //     errorsObject.fullNameError = false
    //     console.log(errorsObject)
    //     setToggling(!toggling)
        
    // } 
    // const toggleEmailError = () => {
    //     errorsObject.emailError = false
    //     console.log(errorsObject)
    //     setToggling(!toggling)
    // } 
    // const toggleCityError = () => {
    //     errorsObject.cityError = false
    //     console.log(errorsObject)
    //     setToggling(!toggling)
    // } 

    // const handlingSubmitInterestedUser = async(interestedUser) => {
    //     setLoadingUser(true)
    //     setTimeout(async()=> {
    //         try {
    //             const { status } = await axios.post(url_users, interestedUser)
    //             console.log(status)
    //             if (status === 201){
    //                 setLoadingUser(false)
    //                 console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
                   
    //             } 
    //         }catch(error) {
    //             console.log(error.response)
    //             const gettingData = () => {
    //                 const whatever = error.response.data.map((error) => {
    //                     if (error.message === "\"fullName\" is not allowed to be empty"){
    //                         console.log('pasa por fullNameError')
    //                         errorsObject.fullNameError = true
    //                     }
    //                     if (error.message === "\"email\" is not allowed to be empty"){
    //                         console.log('pasa por fullNameError')
    //                         errorsObject.emailError = true
    //                     }
    //                     if (error.message === "\"city\" is not allowed to be empty"){
    //                         console.log('pasa por fullNameError')
    //                         errorsObject.cityError = true
    //                     }
    //                 })
    //             }
    //             gettingData()
    //             console.log(errorsObject)
    //             showError(error.response.data)
    //             setLoadingUser(false)    
    //         }
            
    //     },3000)
        
    // }

    
    // const showError = (message) => {
    //     setError(message)
    //     console.log(error)
    // }

    const toggleSideBar = () => {
        console.log('this is toggle...')
        setIsOpen(!isOpen)
        
    } 
    const onLogin = (e) => {
        e.preventDefault()
        setLogin(!login)
    }

    
    return (
        <>
            <SideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar }/>
            { mobil2.screenWidth <= 1098 || mobil ?  
                <NavBarMobil 
                toggleSideBar={ toggleSideBar }  
                username={'hola, arnoldo'}
                login={ login }
                onLogin={ onLogin }
            /> : <NavBar 
            toggleSideBar={ toggleSideBar }  
            username={'hola, arnoldo'}
            login={ login }
            onLogin={ onLogin }
        />
            }
            <HeroSection {...infoHero} />
            <VideoSection {...infoVideo}/>
            <HiwSection {...infoHiW}/>
            <DataSection 
            {...infoData} 
            // showError={showError}
            // handlingSubmitInterestedUser={handlingSubmitInterestedUser}
            // toggleFullNameError={toggleFullNameError}
            // toggleEmailError={toggleEmailError}
            // toggleCityError={toggleCityError}
            // loadingUser={loadingUser}
            // errorsObject={errorsObject}
            />
        </>
    )
}

export default Home
