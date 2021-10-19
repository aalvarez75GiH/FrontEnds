
import React, { useState, useEffect } from 'react'

const InterestedUsersForm = ({ 
    handlingSubmitInterestedUser,
    fullNameError,
    emailError,
    cityError,
    // registeredUser
}) => {
    console.log(fullNameError)
    console.log(emailError)
    console.log(cityError)
    // console.log(registeredUser)

    const [ interestedUser , setInterestedUser ] = useState({
        fullName: '',
        email: '',
        city: ''   
    })

    // useEffect(() => {
    //   if (registeredUser){
    //     setInterestedUser({
    //         fullName: '',
    //         email: '',
    //         city: ''
    //     })
    //   }else{
    //       console.log('here we go')
    //   }      
    // }, [])
   

    const handlingInputChange = (e) => {
        setInterestedUser({
            ...interestedUser, [e.target.name]: e.target.value
        })
        console.log(interestedUser)
    }



    const handlingSubmit = async(e) => {
        e.preventDefault()
        const response = await handlingSubmitInterestedUser(interestedUser)
        console.log(response)
        if (response === 201){
            setInterestedUser({
                fullName: '',
                email: '',
                city: ''
            })
        }
    }
        
    
    
    return (
        <>
        <form className="form-1"  
        onSubmit={(e)=> handlingSubmit(e)}
        >
            {/* <label className="custom-field">
                <input
                onChange={ (e) => handlingInputChange(e)} 
                type="text"
                autoComplete="off"
                name="fullName" 
                required
                value={interestedUser.fullName}
                
                />
                <span className="fullNameSpan">Nombre completo</span>
            </label> */}
            
            <input
                className={`${fullNameError ? 'form1InputFullNameError' : 'form1InputFullName'}`}
                onChange={ (e) => handlingInputChange(e)} 
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