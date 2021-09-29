import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Separator = ({ 
    buttonCaption, 
    background_color,
    button_bkgColor,
    button_caption_color, 
    button_border_color,
    nextSection
}) => {
    
    return (
        <div className="section_separator" 
        style={{ backgroundColor:`${background_color}`}}>
                {/* <Link
                activeClass="active"
                to="section-2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="separator_button"
                style={{
                    backgroundColor: button_bkgColor,
                    color:button_caption_color,
                    border: button_border_color
                }}
                >{buttonCaption}</Link> */}
                    <button
                    style={{
                        backgroundColor: button_bkgColor,
                        color:button_caption_color,
                        border: button_border_color
                    }} 
                    
                    className="separator_button">
                    <Link
                    activeClass="active"
                    to={nextSection}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="separator_button"
                    >
                        {buttonCaption}
                    </Link>
                    
                    </button>
                
                
        </div>
    )
}

export default Separator