import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const DropDownList = ({ onChange }) => {

    const [ isActive, setIsActive ] = useState(false)
    const [ selected, setSelected ] = useState('') 
    const options = ['Caracas', 'Barquisimeto', 'Valencia', 'Maracaibo']
    const toggleDropDownList = () => {
        setIsActive(!isActive)
    }

    console.log(selected)
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
