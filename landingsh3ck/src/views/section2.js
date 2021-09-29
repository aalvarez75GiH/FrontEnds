import React from 'react'
import Separator from '../components/separator'

const Section2 = ({ nextSection}) => {
    return(
        <React.Fragment>
            <div className="section-2" id="section-2">
            
            </div>
            <Separator
            buttonCaption='Como funciona' 
            background_color='#FAD570'
            button_bkgColor='#FAD570'
            button_caption_color='#0C0920'
            button_border_color={`2px solid ${'black'}`}
            nextSection={nextSection}
            />
        </React.Fragment>
        
    )
}

export default Section2