import React from 'react'

const Separator = ({ 
    buttonCaption, 
    background_color,
    button_bkgColor,
    button_caption_color, 
    button_border_color
}) => {
    return (
        <div className="section_separator" 
        style={{ backgroundColor:`${background_color}`}}>
                <button
                style={{
                    backgroundColor: button_bkgColor,
                    color:button_caption_color,
                    border: button_border_color
                }} 
                className="separator_button">
                {buttonCaption}
                </button>
        </div>
    )
}

export default Separator