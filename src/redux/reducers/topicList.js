function topicList(state = {
    loading: true,
    data: []
}, action) {
    switch (action.type) {
        case "TOPICLIST_UPDATE":
            return {
                loading: true,
                data: state.data
            }
        case "TOPICLIST_UPDATE_SUCC":
            return {
                loading: false,
                data: action.data.data
            }
        case "TOPICLIST_UPDATE_FAIL":
            return {
                loading: false,
                data: []
            }
        default:
            return state
    }
}
export default topicList