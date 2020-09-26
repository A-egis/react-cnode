import { combineReducers } from 'redux'
import topicList from './topicList'
import topicDetail from './topicDetail'
import user from './user'
let reducer = combineReducers({
    topicList,
    topicDetail,
    user
})
export default reducer