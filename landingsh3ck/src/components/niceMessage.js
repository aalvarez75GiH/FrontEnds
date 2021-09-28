import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'


const NiceMessage = ({ message, hideMessage }) => {
    if (!message) {
        return null
    }
    
    return (
        <div className="NiceMessage_Container" role="alert">
            <div className="Nice__inner">
                <span className="block">{ message }</span>
                <button
                onClick={()=> hideMessage()} 
                className="Nice__button">
                    <FontAwesomeIcon className="Error__icon" icon={faCheckCircle}/>
                </button>
            </div>
        </div>
        
    )
}

export default NiceMessage