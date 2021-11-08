import useMobilDetection from './mobilDetection'


export const OffsetHandler = (option) => {
    const mobil2 = useMobilDetection()    
        if (option === 'notifyMe' || option === 'checkAProduct'){
            if (mobil2.screenWidth <= 1098 && mobil2.screenWidth > 768){
                return 1220
            }
            if (mobil2.screenWidth <= 768 && mobil2.screenWidth > 560 ){
                return 1025
            }
            if (mobil2.screenWidth <= 560 && mobil2.screenWidth > 480){
                return 1550
            }
            if (mobil2.screenWidth <= 480 && mobil2.screenWidth > 414){
                return 1548
            }
            if (mobil2.screenWidth <= 414 && mobil2.screenWidth > 360){
                return 1650
            }
            if (mobil2.screenWidth <= 360 && mobil2.screenWidth > 280){
                return 1450
            }
        }
        if (option === 'startNow'){
            if (mobil2.screenWidth <= 1098 && mobil2.screenWidth > 768){
                return -180
            }
            if (mobil2.screenWidth <= 768 && mobil2.screenWidth > 560 ){
                return -180
            }
            if (mobil2.screenWidth <= 560 && mobil2.screenWidth > 480){
                return -150
            }
            if (mobil2.screenWidth <= 480 && mobil2.screenWidth > 414){
                return -150
            }
            if (mobil2.screenWidth <= 414 && mobil2.screenWidth > 360){
                return -150
            }
            if (mobil2.screenWidth <= 360 && mobil2.screenWidth > 280){
                return -150
            }
        }
}


    
        
    



