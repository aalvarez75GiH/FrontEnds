export const authReducer = (state = null, action) => {
    console.log(action.payload)
    switch (action.type) {
        case "GET_USER":
            return action.payload || false  // false when user is not logged in
        default: 
            return state 
    }
}

