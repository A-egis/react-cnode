function topicDetail(state={
    data:{
        author:{
            loginName:"",
            avatarUrl:""
        },
        reply:[],
        replyCount:0,
        createTime:"",
        good:true,
        loading:true
    }
}, action){
    switch (action.type){
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
                data:{
                    author:{
                        loginName:"",
                        avatarUrl:""
                    },
                    reply:[],
                    replyCount:0,
                    createTime:"",
                    good:true,
                    loading:true
                }
            }
        default:
            return state
    }
}
export default topicDetail