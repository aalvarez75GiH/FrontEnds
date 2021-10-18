
import React, { useState } from 'react'

const InterestedUsersForm = ({ handlingSubmitInterestedUser }) => {
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity ] = useState('')

    const onHandlingName = (e) => {
        setFullName(e.target.value)
        console.log(fullName)

    }

    const onHandlingEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)

    }

    const onHandlingCity = (e) => {
        setCity(e.target.value)
        console.log(city)
    }

    const handlingSubmit = (e) => {
        e.preventDefault()
        handlingSubmitInterestedUser(fullName, email, city)
        setFullName('')
        setEmail('')
        setCity('')
    }
    
    return (
        <>
                <form className="form-1"  
        onSubmit={(e)=> handlingSubmit(e)}
        >
            <input
                onChange={ (e) => onHandlingName(e)} 
                type="text" 
                placeholder="Nombre completo"
                required
                value={fullName}
                
                />
                 <input
                onChange={ (e) => onHandlingEmail(e)} 
                type="text" 
                placeholder="Correo electrónico"
                required
                value={email}
                
                />
                  <input
                onChange={ (e) => onHandlingCity(e)} 
                type="text" 
                placeholder="Ciudad"
                required
                value={city}
                
                />
                <button
                onClick={(e) => handlingSubmit(e) } 
                type="submit">Enviar</button>  
        </form>
        </>
        
        
        
        
    )
}

export default InterestedUsersForm