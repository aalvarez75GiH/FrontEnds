import React, { useState } from 'react'
import { Link as LinkS } from 'react-scroll'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

const Button = ({ primary, big, fontBig, dark }) => {
    
    const [ hover, setHover ] = useState(false)
    
    const handlingHover = () => {
       setHover(!hover)
       console.log(hover)
    }

    return (
        <button className="button" 
            style={{  
            // backgroundColor: `${ primary ? '#FAD570' : '#010606' }`,
            backgroundColor: `${ hover  ? '#ffffff' : primary }`,
            color:`${ dark ? '#010606' : '#ffffff'}`,
            padding: `${ big ? '14px 48px' : '12px 30px' }` ,
            fontSize: `${ fontBig ? '20px' : '18px' }`,
            }}
            onMouseEnter={ handlingHover }
            onMouseLeave={ handlingHover }
            >
            <LinkS to="/" >
                {/* Get Started { hover ? <ArrowForward/> : <ArrowRight/> } */}
                Ver video 
            </LinkS>
                {/* Get Started */}
            
        </button>       
    )
}

export default Button

