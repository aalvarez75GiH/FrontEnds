import React, { useState } from 'react'

const LoginForm = ({ handlingLoginUser }) => {
    
    
    const [ user, setUser ] = useState({
        email:'',
        password:''
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
            console.log('here the user must be login in...')
            await handlingLoginUser(user)
            setUser({
                email:'',
                password:''
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
            name="email"
            type="text" 
            placeholder="Correo electrónico"
            autoComplete="off"
            required
            value={user.email}
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

export default LoginForm