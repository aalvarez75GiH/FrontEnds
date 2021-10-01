import React from 'react'
import UserForm from '../components/userForm'

const Section4 = ({ handlingSubmitRegUser }) => {
    return(
        <div className="section-4">
            <div className="section-4_form">
                <UserForm
                className="section-4_form__form" 
                handlingSubmitRegUser={ handlingSubmitRegUser }/>
            </div>
            {/* <button className="section_button">¿Quieres saber mas?</button>     */}
        </div>
        
    )
}

export default Section4

