export const openingSideBar = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'isOpen',
            payload: status
        })
    }
}

export const changeLanguage = () => {
    return (dispatch) => {
        dispatch({
            type: 'language',
            payload: null
        })
    }
}

export const openingHeroSection_WWD = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'WWD_Open',
            payload: status
        })
    }
}
export const heroSection_curtain = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'curtain',
            payload: status
        })
    }
}

