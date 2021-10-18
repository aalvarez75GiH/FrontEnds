
import React, { useState } from 'react'

const InterestedUsersForm = ({ handlingSubmitInterestedUser }) => {
    

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
        await handlingSubmitInterestedUser(interestedUser)
        setInterestedUser({
            fullName: '',
            email: '',
            city: ''
        })
    }
    
    return (
        <>
        <form className="form-1"  
        onSubmit={(e)=> handlingSubmit(e)}
        >
            <input
                onChange={ (e) => handlingInputChange(e)} 
                type="text"
                autoComplete="off"
                name="fullName" 
                placeholder="Nombre completo"
                required
                value={interestedUser.fullName}
                
                />
                 <input
                onChange={ (e) => handlingInputChange(e)} 
                type="text"
                autoComplete="off"
                name="email" 
                placeholder="Correo electrónico"
                required
                value={interestedUser.email}
                
                />
                  <input
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