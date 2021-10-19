
import React, { useState } from 'react'
let array = []
let flagFullNameError = false
let flagEmailError = false
let flagCityError = false

const InterestedUsersForm = ({ 
    handlingSubmitInterestedUser,
    // fullNameError,
    // emailError,
    // cityError,
    toggleFullNameError,
    toggleEmailError,
    toggleCityError,
    flag,
    errorData
}) => {
    // console.log(fullNameError)
    // console.log(emailError)
    // console.log(cityError)
    

    console.log(errorData)

    const [ interestedUser , setInterestedUser ] = useState({
        fullName: '',
        email: '',
        city: ''   
    })
    

    
    const handlingInputChange = (e) => {
        setInterestedUser({
            ...interestedUser, [e.target.name]: e.target.value
        })
        console.log(interestedUser)
    }
    
    const handlingSubmit = async(e) => {
        
         try {
            const response  = await handlingSubmitInterestedUser(interestedUser)       
            console.log(response.status)
            if (response.status === 201){
                setInterestedUser({
                    fullName: '',
                    email: '',
                    city: ''
                })
            }
         } catch (error) {
            
            array = errorData
            const test = await array.map((x) => {
                 return(
                    console.log(x.message)
                )
                
                // if (x.message === "\"fullName\" is not allowed to be empty"){
                //     console.log('pasa por el nuevo fullNameError')
                //     flagFullNameError = true
                // }
                // if (x.message === "\"email\" is not allowed to be empty"){
                //     console.log('pasa por el nuevo emailError')
                //     flagEmailError = true
                // }
                // if (x.message === "\"city\" is not allowed to be empty"){
                //     console.log('pasa por el nuevo cityError')
                //     flagCityError = true
                // }
                // if (x.message === "\"email\" must be a valid email"){
                //     console.log('pasa por emailError 2')
                //     flagEmailError = true
                // }
            })    
         }
        
        
        // const response  = await handlingSubmitInterestedUser(interestedUser)
        // console.log(response)
        // if (response === 201){
        //     setInterestedUser({
        //         fullName: '',
        //         email: '',
        //         city: ''
        //     })
        // }
        // array = errorData
        // const test = array.map((x) => {
        //     console.log(x.message)
        //     if (x.message === "\"fullName\" is not allowed to be empty"){
        //         console.log('pasa por el nuevo fullNameError')
        //         flagFullNameError = true
        //     }
        //     if (x.message === "\"email\" is not allowed to be empty"){
        //         console.log('pasa por el nuevo emailError')
        //         flagEmailError = true
        //     }
        //     if (x.message === "\"city\" is not allowed to be empty"){
        //         console.log('pasa por el nuevo cityError')
        //         flagCityError = true
        //     }
        //     if (x.message === "\"email\" must be a valid email"){
        //         console.log('pasa por emailError 2')
        //         flagEmailError = true
        //     }
        // })
       
        
    }

    
    return (
        <>
        <form className="form-1"  
        onSubmit={(e)=> handlingSubmit(e)}
        >
            
            <input
            // className={`${fullNameError ? 'form1InputFullNameError' : 'form1InputFullName'}`}
            className={`${flagFullNameError ? 'form1InputFullNameError' : 'form1InputFullName'}`}
            onChange={ (e) => handlingInputChange(e)} 
            onFocus={toggleFullNameError}
            type="text"
            autoComplete="off"
            name="fullName" 
            placeholder="Nombre completo"
            required
            value={interestedUser.fullName}
            />
            <input
            // className={`${emailError ? 'form1InputEmailError' : 'form1InputEmail'}`}
            className={`${flagEmailError ? 'form1InputEmailError' : 'form1InputEmail'}`}
            onChange={ (e) => handlingInputChange(e)} 
            onFocus={toggleEmailError}
            type="text"
            autoComplete="off"
            name="email" 
            placeholder="Correo electrónico"
            required
            value={interestedUser.email}
                
            />
            <input
            // className={`${cityError ? 'form1InputCityError' : 'form1InputCity'}`}
            className={`${flagCityError ? 'form1InputCityError' : 'form1InputCity'}`}
            onChange={ (e) => handlingInputChange(e)} 
            onFocus={toggleCityError}
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