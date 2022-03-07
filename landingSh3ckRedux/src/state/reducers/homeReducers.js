const homeReducers = (
    state={
        loading: false,
        currentUser: '',
        loginResponse: null,
        loggedIn: false,
        loggedOut: true,
        mainSideBarOpen: false
    }, action) => {

        switch (action.type) {
        case 'loading':
            return  {...state, loading: action.payload}

        case 'currentUser':
            return {...state, currentUser: action.payload}

        case 'loginResponse': 
            return {...state, loginResponse: action.payload}
        case 'loggedIn': 
            return {...state, loggedIn: action.payload}
        case 'loggedOut': 
            return {...state, loggedOut: action.payload}
        case ' mainSideBarOpen': 
            return {...state, mainSideBarOpen: action.payload}
                
        default:
            return state    
    }
} 

export default homeReducers