// ****** sideBar Actions creators ***************
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
// ****************** End ****************************

// ****** heroSections Actions creators ***************
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
// ****************** End *****************************

// ****** contactSection Actions creators ***************
export const openingContactSection = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'isContactSectionOpen',
            payload: status
        })
    }
}

export const activatingForm = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'active',
            payload: value
        })
    }
}
export const openingRegView = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'regView',
            payload: value
        })
    }
}

export const openingForgotPINView = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'forgotPIN',
            payload: value
        })
    }
}
