import React, { useState, useEffect  } from 'react'
import Video from '../../videos/video.mp4'
import Button from '../buttons/button'
import useMobilDetect from '../mobilHook'
// import Image from '../../images/pexels-andrea-piacquadio-3928268.jpg'
import Image_1 from '../../images/pexels-andrea-piacquadio-3928268.jpg'
import Image_2 from '../../images/pexels-chica-triste-medium.jpg'


const HeroSection = () => {
const [esMobil, setEsMobil ] = useState(null)
const mobil = useMobilDetect()
  
    console.log(esMobil)

    if (mobil) {
        return ( 
            <div className="heroContainerMobil">
                <div className="heroContentMobil">
                    <h1 className="heroH1Mobil">Compra sin miedo por internet</h1>
                    <p className="heroPMobil">Nosotros chequeamos los productos que tu quieres comprar...</p>
                    <div className="heroBtnWrapperMobil">
                           <Button 
                            btnBG={ '#FAD570' }
                            fontColor={ true }
                            big={ true }
                            fontBig = { true }
                            >
                            </Button>
                        </div>
                </div>
                <div className="heroBGMobil">
                    <img
                           className="imageBG"
                           alt="this is a test"
                           src={Image_2}
                           />
                </div>
            </div>
                
        )
    }

    if (!mobil){
        return (
            <div className="heroContainer">
                <div className="heroBG">
                    <img
                       className="imageBG"
                       alt="this is a test"
                       src={Image_1}
                       />
                 </div>
                 
                    <div className="heroContent">
                        <h1 className="heroH1">La nueva forma de comprar sin miedo</h1>
                        <h1 className="heroH1">por internet</h1>
                        <div className="heroBtnWrapper">
                           <Button 
                            btnBG={ '#FAD570' }
                            fontColor={ true }
                            big={ true }
                            fontBig = { true }
                            >
                            </Button>
                        </div>
                    </div>
            </div>
        )
    }
}


export default HeroSection


