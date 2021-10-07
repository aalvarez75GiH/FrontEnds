import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import Button from '../buttons/button'

const HeroSection = () => {



    return (
        <div className="heroContainer">
             <div className="heroBG">
                <video
                autoPlay
                loop
                muted
                type='video/mp4' 
                className="VideoBG"
                src={Video}/> 
             </div>
             <div className="heroContent">
                <h1 className="heroH1">Virtual Banking Made Easy</h1>
                <p className="heroP">
                    Sign up for a new account today and receive
                    $250 in credit towards your next payment.
                </p>
                <div className="heroBtnWrapper">
                    <Button
                    primary={ '#01BF71' }
                    dark={ true }
                    big={ true }
                    fontBig = { false }
                    >
                    </Button>
                </div>
             </div>
        </div>
    )
}

export default HeroSection
