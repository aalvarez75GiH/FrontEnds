import React from 'react'
import Button from '../buttons/button'
import useMobilDetection from '../../utils/mobilDetection'
import useMobilDetect from '../../utils/mobilHook'
import VideoJS from '../../components/video'
// import { Button2 } from '../buttons/button2'

const VideoSection2 = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    imgSrc,
    alt, 
}) => {
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection() 
    console.log(mobil2.screenWidth)
    console.log(mobil)

    return (
        <div 
        className="infoContainer"
        style={{ 
            backgroundColor:`${lightBg ? '#ffffff': '#010606'}`  
        }}
        >
            <div className="infoWrapper">
                
                    <div className="column1">
                        {/* <div className="textWrapper">
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
                            <div className="btnWrap">
                                <Button
                                btnBG={ '#FAD570' }
                                fontColor={ true }
                                big={ true }
                                fontBig = { false }
                                >
                                    { buttonLabel }
                                </Button>
                            </div>
                        </div> */}

                    </div>
                    <div className="column2">
                        {/* <div className="videoWrap">
                            <VideoJS/>
                          
                        </div> */}

                    </div>
                    

            </div>

        </div>
    )
}

export default VideoSection2