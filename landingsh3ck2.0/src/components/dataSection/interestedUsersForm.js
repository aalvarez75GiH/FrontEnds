
import React, { useState } from 'react'

const InterestedUsersForm = ({ 
    handlingSubmitInterestedUser,
    fullNameError,
    emailError,
    cityError,
    toggleFullNameError,
    toggleEmailError,
    toggleCityError
}) => {
    console.log(fullNameError)
    console.log(emailError)
    console.log(cityError)

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
            
            <input
            className={`${fullNameError ? 'form1InputFullNameError' : 'form1InputFullName'}`}
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
            className={`${emailError ? 'form1InputEmailError' : 'form1InputEmail'}`}
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
            className={`${cityError ? 'form1InputCityError' : 'form1InputCity'}`}
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