import React from 'react'
import Button from '../buttons/button'
import useMobilDetection from '../../utils/mobilDetection'
import useMobilDetect from '../../utils/mobilHook'
import VideoJS from '../../components/video'
// import { Button2 } from '../buttons/button2'

const VideoSection = ({
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
                <div className={`${ mobil2.screenWidth < 768 || mobil ? 'infoRowMobil' : 'infoRow'}`}>
                    {imgStart}
                    <div className="column1">
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
                        </div>

                    </div>
                    <div className="column2">
                        <div className="videoWrap">
                            <VideoJS/>
                            {/* <img src={imgSrc} alt={alt} /> */}
                        </div>

                    </div>
                    

                </div>

            </div>
            
        </div>
    )
}

export default VideoSection



{/* <>
<InfoContainer
id={ id }
lightBg={ lightBg }
>
    <InfoWrapper>
        <InfoRow
        imgStart={imgStart}
        >
            <Column1>
                <TextWrapper>
                    <TopLine 
                    >{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle
                    darkText={darkText}
                    >{description}</Subtitle>
                    <BtnWrap>
                        <Button
                        smooth={ true }
                        duration={ 500 }
                        spy={ true }
                        exact={ true }
                        offset={ -80 }
                        primary={ primary ? 1 : 0}
                        dark = { dark ? 1 : 0}
                        dark2 = { dark2 ? 1 : 0 }


                        to="home">{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
            </Column1>
            <Column2>
                <ImgWrap>
                    <Img src={imgSrc} alt={alt}/> 
                </ImgWrap>
            
            </Column2>
        </InfoRow>

    </InfoWrapper>

</InfoContainer>  
</> */}




