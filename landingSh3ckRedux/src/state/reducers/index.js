import { combineReducers} from 'redux'
import sideBarReducer from './sideBarReducers'
import heroSectionReducer from './heroSectionReducers'

const reducers = combineReducers({
    // account: sideBarReducer,
    sideBarState: sideBarReducer,
    heroSection: heroSectionReducer

})

export default reducers