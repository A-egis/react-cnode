function topicDetail(state = {
    data: {
        author: {
            avatarUrl: "",
            loginname: ""
        },
        author_id: "",
        content: "",
        create_at: "",
        good: false,
        id: "",
        last_reply_at: "",
        replies: [],
        replyCount: 0,
        tab: "",
        title: "",
        top: false,
        visit_count: 0,
    },
    loading: true
}, action) {
    switch (action.type) {
        case "TOPICDETAIL_UPDATE":
            return {
                loading: true,
                data: state.data
            }
        case "TOPICDETAIL_UPDATE_SUCC":
            return {
                loading: false,
                data: action.data.data
            }
        case "TOPICDETAIL_UPDATE_FAIL":
            return {
                loading: false,
                data: {
                    author: {
                        avatarUrl: "",
                        loginname: ""
                    },
                    author_id: "",
                    content: "",
                    create_at: "",
                    good: false,
                    id: "",
                    last_reply_at: "",
                    replies: [],
                    replyCount: 0,
                    tab: "",
                    title: "",
                    top: false,
                    visit_count: 0
                }
            }
        default:
            return state
    }
}
export default topicDetail