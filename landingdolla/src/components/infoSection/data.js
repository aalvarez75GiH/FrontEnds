import Image1 from '../../images/svg-5.svg'
import Image2 from '../../images/svg-2.svg'
import Image3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    LightTextDesc: true,
    topLine:'Premium Bank',
    headLine:'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel:'get started',
    imgStart: false,
    imgSrc: Image1,
    // imgSrc: require('../../images/pexels-tuấn-kiệt-jr-1382731.jpg'),
    alt: 'Car', 
    dark: true,
    primary: true,
    darkText: true 
}
export const homeObjTwo = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    LightTextDesc: true,
    topLine:'Unlimited Access',
    headLine:'Login to your account at any time',
    description: 'We have covered no matter where you are located. All you need is an internet connection and a phone number',
    buttonLabel:'Learn More',
    imgStart: true,
    imgSrc: Image2,
    // imgSrc: require('../../images/pexels-tuấn-kiệt-jr-1382731.jpg'),
    alt: 'man with cart', 
    dark: true,
    primary: true,
    darkText: false 
}

export const homeObjThree = {
    id: 'services',
    lightBg: true,
    lightText: false,
    LightTextDesc: false,
    dark: false,
    primary: false,
    darkText: true 
}
export const homeObjFour = {
    id: 'team',
    lightBg: true,
    lightText: false,
    LightTextDesc: false,
    topLine:'Join our team',
    headLine:'Creating an account is extremely easy',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go',
    buttonLabel:'Start now',
    imgStart: false,
    imgSrc: Image3,
    // imgSrc: require('../../images/pexels-tuấn-kiệt-jr-1382731.jpg'),
    alt: 'girl with gift', 
    dark: false,
    primary: false,
    darkText: true 
}