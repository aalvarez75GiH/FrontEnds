import React from 'react'
import Separator from '../components/separator'

const Section3 = ({ nextSection }) => {
    return(
        <React.Fragment>
            <div className="section-3" id="section-3">
            
            </div>    
            <Separator 
            buttonCaption='¿Quieres ser parte?' 
            background_color='#FF810A'
            button_bkgColor='#FF810A'
            button_caption_color='#ffffff'
            button_border_color={`2px solid ${'white'}`}
            nextSection={nextSection}
            />
        </React.Fragment>
        
    )
}

export default Section3