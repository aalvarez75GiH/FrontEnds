import React, { useState } from 'react'

const UserForm = ({ handlingSubmitUser }) => {
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')

    const onHandlingName = (e) => {
        setFullName(e.target.value)
        console.log(fullName)

    }

    const onHandlingEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)

    }

    const handlingSubmit = (e) => {
        e.preventDefault()
        handlingSubmitUser(fullName, email)
        setFullName('')
        setEmail('')
    }
    
    return (
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
                <button
                
                onClick={(e) => handlingSubmit(e) } 
                type="submit">Enviar</button>  
        </form>
        
        
        
    )
}

export default UserForm
