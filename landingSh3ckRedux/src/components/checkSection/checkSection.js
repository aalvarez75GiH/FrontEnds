import React from 'react'
import { infoCheck } from '../../utils/data'
import { useSelector } from 'react-redux'

const CheckSection = ({
    gettingOutOfCheckApp
}) => {
    const language = useSelector((state) => state.sideBarState.language)
    return (
        <div className="checkSectionContainer">
            <div className="checkSectionWrapper">
                <div className="checkSection-BtnWrap">
                        <button className="checkSection-checkBtn">
                        {language === 'ES' ? infoCheck.checkSectionBtnLabel : infoCheck.checkSectionBtnLabel_EN}
                        </button>
                        <button 
                        onClick={gettingOutOfCheckApp}
                        className="checkSection-exitBtn">
                        {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN}
        
                        </button>
                </div>
            </div>
        </div>
    )   
}

export default CheckSection