function user(state = {
    loading: true,
    data: {
        data: {
            avatar_url: "",
            create_at: "",
            loginname: "",
            recent_replies: [],
            recent_topics: [],
            score: 0
        }
    }
}, action) {
    switch (action.type) {
        case "USER_UPDATE":
            return {
                loading: true,
                data: state.data
            };
        case "USER_SUCC":
            return {
                loading: false,
                data: action.data.data
            };
        case "USER_ERROR":
            return {
                loading: false,
                data: {
                    data: {
                        avatar_url: "",
                        create_at: "",
                        loginname: "",
                        recent_replies: [],
                        recent_topics: [],
                        score: 0
                    }
                }
            }
        default:
            return state;
    }
}
export default user