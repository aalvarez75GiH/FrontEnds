const sideBarReducer = (
    state={
        isOpen: false,
        language: 'ES'
    }, action) => {
    
        switch (action.type) {
        case 'isOpen':
            return  {...state, isOpen: action.payload}
            
        case 'language':
            if (state.language === 'ES'){
                return {...state, language:'EN'}
            }
            if (state.language === 'EN'){
                return {...state, language:'ES'}
            }
            break
        default:
            return state    
    }
} 

export default sideBarReducer

