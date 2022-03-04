const sideBarReducer = (
    state={
        isOpen: false,
    }, action) => {
    
        switch (action.type) {
        case 'isOpen':
            return  state={
                    isOpen: action.payload,
            } 
        default:
            return state    
    }
} 

export default sideBarReducer

