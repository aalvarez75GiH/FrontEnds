import React from 'react'
import icon1 from '../../images/svg-1.svg'
import icon2 from '../../images/svg-2.svg'
import icon3 from '../../images/svg-3.svg'
import {
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP
} from './servicesSectionElements'

function ServicesSection({ id }) {
    return (
        <>
        <ServicesContainer
        id={id}
        >
            <ServicesH1>Our Services</ServicesH1> 
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={icon1}/>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help to reduce your fees and increase your overall revenue</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon2}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our platform online anywhere in the world</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon3}/>
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership card that returns 5% cash back</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>     
        </ServicesContainer>    
        </>
    )
}

export default ServicesSection
