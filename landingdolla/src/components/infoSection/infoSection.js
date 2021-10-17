import React from 'react'
import { Button } from '../../components/buttons/buttonElements'
import {
    InfoContainer,InfoWrapper,
    InfoRow,Column1,
    TextWrapper,TopLine,
    Heading,Subtitle,
    BtnWrap, Column2, 
    ImgWrap, Img 
} from './infoElements'


const InfoSection = ({ 
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
    primary,
    dark, 
    dark2
}) => {
    return (
        <>
        <InfoContainer
        id={id}
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
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark = {dark ? 1 : 0}
                                dark2 = {dark2 ? 1 : 0}


                                to="services">{buttonLabel}</Button>
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
        </>
    )
}

export default InfoSection
