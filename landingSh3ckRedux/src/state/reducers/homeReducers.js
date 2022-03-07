const homeReducers = (
    state={
        loading: false,
        currentUser: '',
        verifying_token: null,
        loginResponse: null
    }, action) => {

        switch (action.type) {
        case 'loading':
            return  {...state, loading: action.payload}
        case 'currentUser':
            return {...state, currentUser: action.payload}
        case 'verifying_token': 
            return {...state, verifying_token: action.payload}
        case 'loginResponse': 
            return {...state, loginResponse: action.payload}
                
        default:
            return state    
    }
} 

export default homeReducers