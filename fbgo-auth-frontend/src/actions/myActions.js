import axios from 'axios'

export const fetchUserAction = () => {
    return dispatch => {
        axios.get('http://localhost:5000/api/current_user',{})
        .then(res => {
            console.log(res)
            dispatch({
                type: 'GET_USER',
                payload: res.data
            })
        })
        // fetch('http://localhost:5000/auth/current_user')
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res)
        //     dispatch({
        //         type: 'GET_USER',
        //         payload: res.data
        //     })
        // })
    }
}
    


