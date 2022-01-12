import axios from 'axios'

export const fetchUserAction = () => {
    return dispatch => {
        axios.get('http://localhost:5000/auth/current_user')
        .then(response => {
            console.log(response)
            dispatch({
                type: 'GET_USER',
                payload: response.data
            })
        })
    }
}

