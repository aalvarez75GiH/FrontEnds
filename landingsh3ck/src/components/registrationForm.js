import React, { useState } from 'react'

const RegistrationForm = ({ handlingSubmitRegUser }) => {
    
    
    const [ user, setUser ] = useState({
        fullName: '',
        email:'',
        password:'',
        phoneNumber:''
    })

    
    const onHandlingInputChange = (e) => {
        e.preventDefault()
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        console.log(user)

    }

    
    const handlingSubmit = async(e) => {
        e.preventDefault()
        try {
            console.log('here is the magic...')
            await handlingSubmitRegUser(user)
            setUser({
                fullName: '',
                email:'',
                password:'',
                phoneNumber:'',
            })


        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <form 
        className="form-4"  
        onSubmit={(e)=> handlingSubmit(e)}
        >
            <input type="hidden" value="prayer" />
            <div className="form4-title">
                <h3 className="form4-title__title">
                    Regístrate con nosotros
                </h3>
            </div>
            <input
            onChange={ (e) => onHandlingInputChange(e)} 
            name="fullName"
            type="text" 
            placeholder="Nombre completo"
            autoComplete="off"
            required
            value={user.fullName}
            />
            <input
            onChange={ (e) => onHandlingInputChange(e)} 
            name="email"
            type="text" 
            placeholder="Correo electrónico"
            autoComplete="off"
            required
            value={user.email}
            />
            <input
            onChange={ (e) => onHandlingInputChange(e)} 
            name="phoneNumber"
            type="text" 
            placeholder="Introduce número telefónico"
            autoComplete="off"
            required
            value={user.phoneNumber}
            />
            <input
            onChange={ (e) => onHandlingInputChange(e)} 
            name="password"
            type="text" 
            placeholder="Introduce tu Password"
            autoComplete="off"
            required
            value={user.password}
            />
            <button
            onClick={(e) => handlingSubmit(e)} 
            type="submit">Enviar
            </button>  
        </form>
        
        
        
    )
}

export default RegistrationForm