
import React, { useState, useEffect } from 'react'
let persistentData = []


const InterestedUsersForm = ({ 
    handlingSubmitInterestedUser,
    toggleFullNameError,
    toggleEmailError,
    toggleCityError,
    errorsObject
}) => {
  
    console.log(errorsObject)
  

    const [ interestedUser , setInterestedUser ] = useState({
        fullName: '',
        email: '',
        city: ''   
    })

    useEffect(()=>{
        console.log(persistentData)
        const persistingInfo = () => {
            console.log(persistentData[1])
            document.getElementById('fullName').value = persistentData[0]
            document.getElementById('email').value = persistentData[1]
            document.getElementById('city').value = persistentData[2]
        }
        persistingInfo()
        
    },[])


    const handlingInputChange = (e) => {
        setInterestedUser({
            ...interestedUser, [e.target.name]: e.target.value
        })
    }

  


    const handlingSubmit = async(e) => {
        persistentData.push(interestedUser.fullName, interestedUser.email, interestedUser.city)
        const response  = await handlingSubmitInterestedUser(interestedUser)       
        console.log( response )
        console.log(persistentData)
    }

    return (
        <>
        <form className="form-1"  
        onSubmit={(e)=> handlingSubmit(e)}
        >
            
            <input
            id="fullName" 
            className={`${errorsObject.fullNameError ? 'form1InputFullNameError' : 'form1InputFullName'}`}
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
            id="email"
            className={`${errorsObject.emailError ? 'form1InputEmailError' : 'form1InputEmail'}`}
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
            id="city"
            className={`${errorsObject.cityError ? 'form1InputCityError' : 'form1InputCity'}`}
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