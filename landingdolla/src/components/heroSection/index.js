import React, { useState } from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    Button,
    ArrowForward,
    ArrowRight
} from './heroElements'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    
    const [ hover, setHover ] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg
                autoPlay
                loop
                muted
                src={Video}
                type='video/mp4'
                />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive
                      $250 in credit towards your next payment.  
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                    onMouseEnter={ onHover }
                    onMouseLeave={ onHover }
                    to="/signup">
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
