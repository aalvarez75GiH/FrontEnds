import React from 'react'
import VideoJS from '../components/video'
import UserForm from '../components/userForm'
import Separator from '../components/separator'



const Section1 = ({ handlingSubmitUser, nextSection  }) => {
    return (
        <React.Fragment>
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
        <Separator
            buttonCaption='¿Quieres saber más?' 
            background_color='#0C0920'
            button_bkgColor='#0C0920'
            button_caption_color='#ffffff'
            button_border_color={`2px solid ${'white'}`}
            nextSection={nextSection}
            />
        </React.Fragment>
        
        
    )
} 

export default Section1