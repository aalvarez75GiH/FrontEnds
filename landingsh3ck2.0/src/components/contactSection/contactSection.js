import React, { useState } from 'react'
import  { motion } from 'framer-motion'
import InterestedUsersForm from '../contactSection/interestedUserForm'
import Loading from '../loading'
import OptionsForms from './optionsForms'
import RegisterForm from './registerForm'
import LoginForm from './loginForm'
import axios from 'axios'
import FormHeader from './formHeader'


const ContactSection = ({
    lightText,
    topLine,
    headLine,
    description,
    darkText,
    loggedIn,
    handlingSubmitLoginUser,

}) => {
   
    const [ expansion, setExpansion ] = useState(false)
    const [ upLoadingUser, setUpLoadingUser ] = useState(false)
    const [ active , setActive ] = useState('interested') 
    const [ regView, setRegView ] = useState(false) 
    const url_interestedUsers = "http://localhost:5000/api/interestedUsers"
    const url_users = "http://localhost:5000/api/users"
    const url_userLogin = "http://localhost:5000/api/users/login"
    console.log(loggedIn)
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
        setRegView(true)
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
                        setUpLoadingUser(false)
                        console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
                        return response.status
                    }
            } catch (error) {
                console.log(error)
            }
        },2000)
        
    }

    const handlingSubmitUser = (user) => {
        // console.log('i am submitUser...')
        setUpLoadingUser(true)
         setTimeout(async()=> {
            try {
                const response = await axios.post(url_users, user)
                    console.log(response)
                    if (response.status === 201){
                        setUpLoadingUser(false)
                        setRegView(false)
                        console.log('Gracias por registrarte')
                        return response.status
                    }
            } catch (error) {
                console.log(error)
            }
        },2000)
    } 



    if (upLoadingUser){
        return (
            <div className="contactContainer">
                <div className="contactWrapper">
                    <motion.div 
                    className="contactInfo"
                    // variants={backDropVariants}
                    // animate={expansion ? 'expanded' : 'collapsed'}
                    // transition={expandingTransition}
                    >
    
                    </motion.div>
                    <div className="contactForms">
                        <Loading/>
                    </div>
                    
                </div>
                
            </div>
        )    
    }
    return (
        <div className="contactContainer">
            <div className="contactWrapper">
                <motion.div 
                className="contactInfo"
                // variants={backDropVariants}
                // animate={expansion ? 'expanded' : 'collapsed'}
                // transition={expandingTransition}
                >

                </motion.div>
                <div className="contactForms">
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
                     <InterestedUsersForm 
                     handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                     />
                     :
                     null
                    }
                    { active === 'interested' && loggedIn === false ? 
                     <InterestedUsersForm 
                     handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                     />
                     :
                     null
                    }
                    { active === 'check' && loggedIn  ? 
                    <InterestedUsersForm
                    handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                    />
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
                </div>
                

            </div>
            
        </div>
    )
}

export default ContactSection

