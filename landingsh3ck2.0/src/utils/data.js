import video from '../videos/sh3ck-1080p-210928.mp4'
import hiwImage1 from '../images/1stStep.png'
import hiwImage2 from '../images/2ndStep.png'
import hiwImage3 from '../images/3rdStep.png'
import hiwImage4 from '../images/4thStep.png'
import hiwImage5 from '../images/5thStep.png'

export const infoHero = {
    id:'heroSection',
    heroH1: 'Somos la nueva forma de comprar sin miedo',
    heroH1_2: 'por internet',
    buttonLabel: 'Ver Video',
    linkedTo: 'videoSection',
    heroH1Mobil: 'Compra sin miedo por internet',
    heroPMobil: 'Nosotros chequeamos los productos que tu quieres comprar...',
    // English
    heroH1_EN: 'We are the new way of buying without fear',
    heroH1_2_EN:'online',    
    heroH1Mobil_EN: 'Buy without fear online',
    heroPMobil_EN: 'We check the products you want to buy',
    buttonLabel_EN: 'See Video'
}
export const infoVideo = {
    id:'videoSection',
    lightBg: true,
    lightText: false,
    LightTextDesc: true,
    topLine:'No te pierdas de nada...',
    headLine:'En este video te explicamos de que trata nuestro servicio...',
    description: 'Imagina que quieres comprar algo a un super buen précio pero témez que pueda ser una estáfa o dudas de la calidad del producto. En Sh3ck tenemos la solución para ti...',
    videoSrc: video,
    darkText: '#010606', 
    buttonLabel: 'Como funciona',
    linkedTo: 'hiwSection' ,
    // English
    topLine_EN: `Don't miss anything...`,
    headLine_EN: `In this video we explain what our service is about ...`,
    description_EN: `Imagine that you want to buy something at a super good price but fear that it could be a scam or have doubts about the quality of the product. At Sh3ck we have the solution for you ...`,
    buttonLabel_EN:`How it works`
}

export const infoHIW = {
    id:'hiwSection',
    imgSrc1: hiwImage1,
    imgSrc2: hiwImage2,
    imgSrc3: hiwImage3,
    imgSrc4: hiwImage4,
    imgSrc5: hiwImage5, 
    linkedTo: 'contactSection',
    step_1: '1',
    step_2: '2',
    step_3: '3',
    step_4: '4',
    step_5: '5',
    
    // Spanish
    hiwH1: 'Como funciona esto',
    step_description_1: 'Escoge la ciudad donde se encuentra el producto',
    step_description_2: 'Especifica el tipo de producto y en que tiempo lo necesitas',
    step_description_3: 'Escoge el chequeador que más te guste y que se adapte mejor a ti',
    step_description_4: 'Completa tu orden, ofrece los datos del vendedor del producto',
    step_description_5: 'El chequeador hará el chequeo y te contacta para darte los detalles',
    buttonLabel:'¿Quieres comenzar?',
    alt1:' Escoge ciudad',
    alt2:'Tipo de producto',
    alt3:'Escoge chequeador',
    alt4:'Finaliza oreden',
    alt5:'Video en tiempo real',
    
    // English
    hiwH1_EN: 'How it works',
    step_description_1_EN: 'Choose the city where the product you wanna buy is located',
    step_description_2_EN: 'Specify product type and time cap you need the check',
    step_description_3_EN: 'Choose your preferred checker according to your needs',
    step_description_4_EN: 'Complete your check order and enter the seller information',
    step_description_5_EN: 'our checker will complete your check order and will contact to you to give you details of your product',
    buttonLabel_EN:'¿Do you wanna start?',
    alt1_EN:' Choose the city',
    alt2_EN:'Product type',
    alt3_EN:'Choose checker',
    alt4_EN:'Finish the order',
    alt5_EN:'Real time video',
}

export const infoContact = {
    id:'contactSection',
    lightBg: true,
    lightText: true,
    LightTextDesc: true,
    topLine:'¿Estas listo para comenzar?',
    headLine:'Nuestra App móvil estará lista prónto, mientras tanto...',
    description: 'Estamos trabajando duro para llevarte la mejor experiencia móvil, aún asi puedes comunicarte con nosotros, dejarnos tus datos para informarte cuando esté activa o chequear un producto desde ya...',
    darkText: '#010606', 
    linkedTo: 'hiwSection' 
}

