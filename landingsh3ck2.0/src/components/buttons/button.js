import React, { useState } from 'react'
import { Link as LinkS } from 'react-scroll'


const Button = ({ btnBG, big, fontBig, fontColor, buttonLabel }) => {
    
    const [ hover, setHover ] = useState(false)
    
    const handlingHover = () => {
       setHover(!hover)
       console.log(hover)
    }

    return (
        <LinkS className="button" 
            style={{  
            backgroundColor: `${ hover  ? '#FF810A' : btnBG }`,
            color:`${ fontColor ? '#010606' : '#ffffff'}`,
            padding: `${ big ? '14px 48px' : '12px 30px' }` ,
            fontSize: `${ fontBig ? '20px' : '18px' }`,
            }}
            onMouseEnter={ handlingHover }
            onMouseLeave={ handlingHover }
            >
                { buttonLabel }    
        </LinkS>       
    )

    // return (
    //     <button className="button" 
    //         style={{  
    //         backgroundColor: `${ hover  ? '#FF810A' : btnBG }`,
    //         color:`${ fontColor ? '#010606' : '#ffffff'}`,
    //         padding: `${ big ? '14px 48px' : '12px 30px' }` ,
    //         fontSize: `${ fontBig ? '20px' : '18px' }`,
    //         }}
    //         onMouseEnter={ handlingHover }
    //         onMouseLeave={ handlingHover }
    //         >
    //         <LinkS to="howItWorksSection" >
    //              { buttonLabel }   
    //         </LinkS>
                
            
    //     </button>       
    // )
}

export default Button

