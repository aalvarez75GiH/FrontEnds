import React, { useState } from 'react'
import  { motion } from 'framer-motion'
import InterestedUsersForm from '../contactSection/interestedUserForm'
import Loading from '../loading'
import axios from 'axios'



const ContactSection = ({
    lightText,
    topLine,
    headLine,
    description,
    darkText,
}) => {
   
    const [ expansion, setExpansion ] = useState(false)
    const [ upLoadingUser, setUpLoadingUser ] = useState(false)  
    const url_users = "http://localhost:5000/api/interestedUsers"
    
    const toggleBackDrop = () => {
        setExpansion(true)
        setTimeout(()=>{
            setExpansion(false)
        },expandingTransition.duration * 1000 - 1500)
    }

    const backDropVariants = {
        expanded: {
            width: '100%',
            height: '700px',
        },
        collapsed: {
            width: '50%',
            height: '700px'
        }
    }

    const expandingTransition = {
        type: "spring",
        duration: 2,
        stiffness: 50
    }

    const handlingSubmitInterestedUser = (interestedUser) => {
        setUpLoadingUser(true)
        setTimeout(async()=> {
            try {
                const response = await axios.post(url_users, interestedUser)
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

    if (upLoadingUser){
        return (
            <div className="contactContainer">
                <div className="contactWrapper">
                    <motion.div 
                    className="contactInfo"
                    variants={backDropVariants}
                    animate={expansion ? 'expanded' : 'collapsed'}
                    transition={expandingTransition}
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
                variants={backDropVariants}
                animate={expansion ? 'expanded' : 'collapsed'}
                transition={expandingTransition}
                >

                </motion.div>
                <div className="contactForms">
                    <div className="optionsWrapper">
                        <div className="notifyMe">
                            <p>Solo notificame</p>
                        </div>
                        <div className="checkAProduct">
                            <p>Quiero chequear un producto</p>
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
                    <InterestedUsersForm  
                    handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                    />
                        
                    {/* <div className="effectTest">
                        <button
                        onClick={toggleBackDrop}
                        >Effect</button>
                    </div> */}
                </div>
                

            </div>
            
        </div>
    )
}

export default ContactSection