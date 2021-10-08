import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import Button from '../buttons/button'
import Image from '../../images/pexels-andrea-piacquadio-3928268.jpg'



const HeroSection = () => {

    return (
        <div className="heroContainer">
             <div className="heroBG">
                <img
                   className="imageBG"
                   alt="this is a test"
                   src={Image}/> 
                   {/* <video
                   autoPlay
                   loop
                   muted
                   type='video/mp4' 
                   className="VideoBG"
                   src={Video}/>  */}
             </div>
             <div className="heroContent">
                <h1 className="heroH1">La nueva forma de comprar sin miedo</h1>
                <h1 className="heroH1">por internet</h1>
                {/* <p className="heroP">
                    Haz click si quieres saber de que trata...
                </p> */}
                <div className="heroBtnWrapper">
                    <Button 
                    primary={ '#FAD570' }
                    dark={ true }
                    big={ true }
                    fontBig = { true }
                    >
                    </Button>
                </div>
             </div>
        </div>
    )
}


export default HeroSection
// #FAD570