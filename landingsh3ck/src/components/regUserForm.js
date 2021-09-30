import React, { useState } from 'react'

const RegUserForm = ({ handlingSubmitRegUser }) => {
    
    
    const [ regUser,setRegUser ] = useState({
        fullName:'',
        email:'',
        password:'',
        phoneNumber:''
    })
    
    const onHandlingInputChange = (e) => {
        e.preventDefault()
        setRegUser({
            ...regUser, [e.target.name]: e.target.value
        })
        console.log(regUser)

    }

    
    const handlingSubmit = async(e) => {
        e.preventDefault()
        try {
            console.log('here is the magic...')
            await handlingSubmitRegUser(regUser)    
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <form className="form-4"  
        onSubmit={(e)=> handlingSubmit(e)}
        >
            <input
            onChange={ (e) => onHandlingInputChange(e)} 
            name="fullName"
            type="text" 
            placeholder="Nombre completo"
            required
            value={regUser.fullName}
            
            />
             <input
            onChange={ (e) => onHandlingInputChange(e)} 
            name="email"
            type="text" 
            placeholder="Correo electrónico"
            required
            value={regUser.email}
            
            />
             <input
            onChange={ (e) => onHandlingInputChange(e)} 
            name="phoneNumber"
            type="text" 
            placeholder="Introduce número telefónico"
            required
            value={regUser.phoneNumer}
            
            />
             <input
            onChange={ (e) => onHandlingInputChange(e)} 
            name="password"
            type="text" 
            placeholder="Introduce tu Password"
            required
            value={regUser.password}
            
            />
            <button
            onClick={(e) => handlingSubmit(e)} 
            type="submit">Enviar
            </button>  
        </form>
        
        
        
    )
}

export default RegUserForm