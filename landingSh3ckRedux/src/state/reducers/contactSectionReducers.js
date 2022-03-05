const contactSectionReducer = (
    state={
        isContactSectionOpen: false,
        active: null,
        regView: false,
        forgotPIN: false
    }, action) => {
        switch (action.type) {
        case 'isContactSectionOpen':
            return  {...state, isContactSectionOpen: action.payload}

        case 'active':
            return {...state, active: action.payload}
        case 'regView':
            return {...state, regView: action.payload}
        case 'forgotPIN':
            return {...state, forgotPIN: action.payload}
        default:
            return state    
    }
} 

export default contactSectionReducer