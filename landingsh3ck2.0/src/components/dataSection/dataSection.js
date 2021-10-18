import React from 'react'
import InterestedUserForm from './interestedUsersForm'

const DataSection = ({
    lightText,
    topLine,
    headLine,
    description,
    darkText,
    handlingSubmitInterestedUser
}) => {
    return (
        <div className="dataContainer">
            <div className="dataWrapper">
                <div className="dataRow">
                    <div className="dataText">
                        <div className="dataTextWrapper">
                        <p
                            style={{
                                color: `${ lightText ? '#FAD570' : darkText }`
                            }} 
                            className="topLine">{ topLine }</p>
                            <h1
                            style={{
                                color: `${ lightText ? '#FFFFFF' : darkText }`
                            }} 
                            className="h1Data">{headLine}</h1>
                            <p 
                            style={{
                                color: `${ lightText ? '#FFFFFF' : darkText }`
                            }}
                            className="subTitle">{description}</p>
                        </div>
                            
                    </div>
                    
                    <div className="dataFormWrapper">
                        <div className="optionsWrapper">
                            <div className="notifyMe">
                                <p>Solo notificame</p>

                            </div>
                            <div className="checkAProduct">
                                <p>Quiero chequear un Producto </p>
                            </div>

                        </div>
                        <div className="titleWrapper">
                            <div className="formTitle">
                                <h1 className="title">¿Quieres saber más de nosotros? </h1>
                            </div>
                            <div className="formDescription">
                                <p>Al darnos estos datos podremos enviarte más información</p>
                            </div>

                        </div>
                       
                        <InterestedUserForm
                        handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                        />
                    
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}

export default DataSection