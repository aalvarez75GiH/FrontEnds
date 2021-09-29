import React from 'react'
import VideoJS from '../components/video'
import UserForm from '../components/userForm'

const Section1 = ({ handlingSubmitUser }) => {
    return (
        <div className="section-1">
            <div className="section-1__video">
                <VideoJS/>
            </div>
            <div className="section-1_form">
                <UserForm
                className="section-1_form__form" 
                handlingSubmitUser={ handlingSubmitUser }/>
            </div>
            {/* <button className="section_button">¿Quieres saber mas?</button>     */}
        </div>
        
    )
} 

export default Section1