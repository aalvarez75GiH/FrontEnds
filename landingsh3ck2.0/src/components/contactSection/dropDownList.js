import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const DropDownList = ({ selected, setSelected }) => {

    const [ isActive, setIsActive ] = useState(false) 
    const options = ['Caracas', 'Barquisimeto', 'Valencia', 'Maracaibo']
    const toggleDropDownList = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="dropdown">
            <div className="dropdown-btn"
            onClick={toggleDropDownList}
            >
                {selected}
                <MdKeyboardArrowDown
                className="arrowDown"
                />
            </div>
            { isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div 
                        onClick={ e => { 
                            setSelected(option)
                            setIsActive(false)
                        }}    
                        className="dropdown-item">
                            {option}
                        </div>
                    ))}  
                </div>
            )}
        </div>
    )
}

export default DropDownList
