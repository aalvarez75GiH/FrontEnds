import React from 'react'
import RegUserForm from '../components/regUserForm'

const Section4 = ({ handlingSubmitRegUser }) => {
    return(
        <div className="section-4">
            <div className="section-4_form">
                <RegUserForm
                className="section-4_form__form" 
                handlingSubmitRegUser={ handlingSubmitRegUser }/>
            </div>
            {/* <button className="section_button">¿Quieres saber mas?</button>     */}
        </div>
        
    )
}

export default Section4

