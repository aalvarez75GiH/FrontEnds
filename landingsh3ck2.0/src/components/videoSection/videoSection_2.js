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
        <div className="infoContainer">
        
            <div className="grid">
                <div className="title">
                    <h1>HEY HOW ARDE YOU?</h1>

                </div>
                <div className="video">
                    <div className="square">square

                    </div>
                
                </div>    
            </div>
            

        </div>
    )
}

export default VideoSection2