const homeReducers = (
    state={
        loading: false,
    }, action) => {

        switch (action.type) {
        case 'loading':
            return  {...state, loading: action.payload}
                
        default:
            return state    
    }
} 

export default homeReducers