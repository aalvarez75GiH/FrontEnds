import React, { useState, useEffect  } from 'react'
import useMobilDetect from '../mobilHook'
import Video from '../../videos/video.mp4'
import Button from '../buttons/button'
// import Image from '../../images/pexels-andrea-piacquadio-3928268.jpg'
import Image_1 from '../../images/pexels-andrea-piacquadio-3928268.jpg'
import Image_2 from '../../images/pexels-andrea-piacquadio-640X494.jpg'


const HeroSection = () => {

    // const [ mobil, setMobil ] = useState(null)
    
    // useEffect(()=> {
    //     const itsMobil = MobilDetect()
    //     setMobil(itsMobil)
    //     console.log(itsMobil)
    // },[])

  const itsMobil = useMobilDetect() 
    return (
        <div className="heroContainer">
             <div className="heroBG">
                <img
                   className="imageBG"
                   alt="this is a test"
                //    src={Image_1}
                   src={`${!itsMobil ? Image_1 : Image_2}`}
                   
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


export default HeroSection
// #FAD570