import React from 'react'
import picture from '../components/content/pictures/pexels-nataliya-small-6214470 .jpg'
//import welcome_picture from '../../public/images/pexels-kampus-production-7289741.jpg'

const Welcome = () => {
    return(
        <div className="welcome">
            <div className="welcome__image">
                <img 
                src={picture} 
                alt="buying_safe" />
            </div>
            <div className="welcome_title">
            </div>
        {/* <button className="section_button">¿Quieres saber mas?</button>     */}
    
        </div>
    )
}

export default Welcome