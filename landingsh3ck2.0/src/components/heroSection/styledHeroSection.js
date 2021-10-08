import React from 'react'
import { 
    HeroContainer,
    HeroBG,
    ImageBG,
    HeroContent,
    HeroH1,
    HeroBtnWrapper


} from './styledHeroSectionElements'
import Image from '../../images/pexels-andrea-piacquadio-3928268.jpg'
import { StyledButton } from '../buttons/styledButton'


const StyledHeroSection = () => {
    return (
        <HeroContainer>
            <HeroBG>
                <ImageBG
                src={Image}
                />
            </HeroBG>
            <HeroContent>
                <HeroH1>La nueva forma de comprar sin miedo</HeroH1>
                <HeroH1>por internet</HeroH1>
                <HeroBtnWrapper>
                    <StyledButton
                    primary={ true }
                    dark={ true }
                    >
                        Ver video
                    </StyledButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default StyledHeroSection


//  <div className="heroContainer">
//     <div className="heroBG">
//        <img
//           className="imageBG"
//           alt="this is a test"
//           src={Image}/> 
//      </div>
//      <div className="heroContent">
//         <h1 className="heroH1">La nueva forma de comprar sin miedo</h1>
//         <h1 className="heroH1">por internet</h
//         <div className="heroBtnWrapper">
//             <Button 
//             primary={ '#FAD570' }
//             dark={ true }
//             big={ true }
//             fontBig = { true }
//             >
//             </Button>
//         </div>
//      </div>
// </div>