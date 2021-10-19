
import React, { useState } from 'react'


const InterestedUsersForm = ({ 
    handlingSubmitInterestedUser,
    fullNameError,
    emailError,
    cityError,
    toggleFullNameError,
    toggleEmailError,
    toggleCityError,
    // errorFlags,
    // initializeErrors
}) => {
    // console.log(fullNameError)
    // console.log(emailError)
    // console.log(cityError)
    let array = []

    const [ interestedUser , setInterestedUser ] = useState({
        fullName: '',
        email: '',
        city: ''   
    })
    // const [ fullNameError, setFullNameError ] = useState(false)
    // const [ emailError, setEmailError ] = useState(false)
    // const [ cityError, setCityError ] = useState(false)

    
    const handlingInputChange = (e) => {
        setInterestedUser({
            ...interestedUser, [e.target.name]: e.target.value
        })
        console.log(interestedUser)
    }
    
    // const toggleFullNameError = () => {
    //     setFullNameError(false)
        
    // } 
    // const toggleEmailError = () => {
    //     setEmailError(false)
        
        
    // } 
    // const toggleCityError = () => {
    //     setCityError(false)
        
        
    // } 


    const handlingSubmit = async(e) => {
        e.preventDefault()
        const response  = await handlingSubmitInterestedUser(interestedUser)
        console.log(response)
        if (response === 201){
            setInterestedUser({
                fullName: '',
                email: '',
                city: ''
            })
        }
        console.log(response)
        // console.log(response)
        // const responseErrors = response
        // console.log(responseErrors)
        // array = responseErrors
        // console.log(array)
        // const test = array.map((x) => {
        //     if (x.message === "\"fullName\" is not allowed to be empty"){
        //         setFullNameError(true)
                
        //     }
        //     if (x.message === "\"email\" is not allowed to be empty"){
        //         setEmailError(true)
                
        //     }
        //     if (x.message === "\"city\" is not allowed to be empty"){
        //         setCityError(true)
                
        //     }
        //     if (x.message === "\"email\" must be a valid email"){
        //         setEmailError(true)
                
                
        //     }
        // })
        
    }

    
    return (
        <>
        <form className="form-1"  
        onSubmit={(e)=> handlingSubmit(e)}
        >
            
            <input
            className={`${fullNameError ? 'form1InputFullNameError' : 'form1InputFullName'}`}
            onChange={ (e) => handlingInputChange(e)} 
            onFocus={toggleFullNameError}
            // onFocus={initializeErrors}
            type="text"
            autoComplete="off"
            name="fullName" 
            placeholder="Nombre completo"
            required
            value={interestedUser.fullName}
            />
            <input
            className={`${emailError ? 'form1InputEmailError' : 'form1InputEmail'}`}
            onChange={ (e) => handlingInputChange(e)} 
            onFocus={toggleEmailError}
            // onFocus={initializeErrors}
            type="text"
            autoComplete="off"
            name="email" 
            placeholder="Correo electrónico"
            required
            value={interestedUser.email}
                
            />
            <input
            className={`${cityError ? 'form1InputCityError' : 'form1InputCity'}`}
            onChange={ (e) => handlingInputChange(e)}
            onFocus={toggleCityError} 
            // onFocus={initializeErrors}
            type="text"
            autoComplete="off"
            name="city" 
            placeholder="Ciudad"
            required
            value={interestedUser.city}
            
            />
            <button
            onClick={(e) => handlingSubmit(e) } 
            type="submit">Enviar</button>  
        </form>
        </>
    )
}

export default InterestedUsersForm