import React from 'react'
import RegistrationForm from '../components/registrationForm'
import LoginForm from '../components/loginForm'


const Section4 = ({ handlingSubmitRegUser, handlingLoginUser }) => {
    return(
        <div className="section-4">
            <div className="section-4_form">
                <RegistrationForm
                className="section-4_form__form" 
                handlingSubmitRegUser={ handlingSubmitRegUser }/>
            </div>
            <div className="section-4_form">
                <LoginForm
                className="section-4_form__form" 
                handlingLoginUser={ handlingLoginUser }/>
            </div>
            {/* <button className="section_button">¿Quieres saber mas?</button>     */}
        </div>
        
    )
}

export default Section4

