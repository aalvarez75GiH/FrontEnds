import { useState, useEffect } from 'react'


const useMobilDetect = () => {
const [ itsMobil, setItsMobil ] = useState(null)

    useEffect(()=> {
        const mql = window.matchMedia('(min-width: 769px)')
        mql.addEventListener("change", () => {
            if (mql.matches){
                setItsMobil(false)
            }else{
                setItsMobil(true)
            }
        })
    },[])

    return itsMobil
}

 export default useMobilDetect