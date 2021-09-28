import React from 'react'
import UserForm from '../components/userForm'

const Section4 = ({ handlingSubmitUser }) => {
    return(
        <div className="Signup">
            <div className="FormContainer">
                <div>
                 <UserForm 
                  handlingSubmitUser={ handlingSubmitUser }
                  />    
                </div>
            </div>
        </div>
    )
}

export default Section4