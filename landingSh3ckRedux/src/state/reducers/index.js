import { combineReducers} from 'redux'
import sideBarReducer from './sideBarReducers'

const reducers = combineReducers({
    // account: sideBarReducer,
    sideBarState: sideBarReducer,

})

export default reducers