import React from 'react'

const DataSection = ({
    lightText,
    topLine,
    headLine,
    description,
    darkText
}) => {
    return (
        <div className="dataContainer">
            <div className="dataWrapper">
                <div className="dataRow">
                    <div className="dataText">
                        <div className="textWrapper">
                        <p
                            style={{
                                color: `${ lightText ? '#FF810A' : darkText }`
                            }} 
                            className="topLine">{ topLine }</p>
                            <h1
                            style={{
                                color: `${ lightText ? '#FFFFFF' : darkText }`
                            }} 
                            className="heading">{headLine}</h1>
                            <p 
                            style={{
                                color: `${ lightText ? '#FFFFFF' : darkText }`
                            }}
                            className="subTitle">{description}</p>
                        </div>
                            
                    </div>
                    
                    <div className="dataFormWrapper">

                    </div>
                </div>
                

            </div>
            
        </div>
    )
}

export default DataSection