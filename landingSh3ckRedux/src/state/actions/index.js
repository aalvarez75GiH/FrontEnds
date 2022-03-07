import axios from 'axios'

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
export const openingQASideBar = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'QASideBarOpen',
            payload: status
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

// ****** Home Actions creators ***************

export const activatingSpinner = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'loading',
            payload: value
        })
    }
}



export const fetchToken = (token) => async dispatch => {   
    const response = await axios.get('https://intense-atoll-00786.herokuapp.com/api/users/me', {
        headers:{
            Authorization: `Bearer ${token}` 
        }})
    dispatch({
        type: 'currentUser', 
        payload: response.data
    })
}

export const fetchTokenForLoginUser = (token) => async dispatch => {   
    const response = await axios.get('https://intense-atoll-00786.herokuapp.com/api/users/me', {
        headers:{
            Authorization: `Bearer ${token}` 
        }})
        dispatch({
            type: 'verifying_token', 
            payload: response
        })
        
}
export const handlingLoginResponse = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'loginResponse',
            payload: value
        })
    }
}


