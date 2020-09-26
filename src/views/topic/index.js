import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import MyCard from '@c/MyCard'
import TextTag from '@c/TextTag'
import { format } from 'timeago.js'
import ReplyList from '@v/topic/ReplyList'
import { Card } from 'antd'
import '@v/topic/index.css'
class Topic extends React.Component {
    componentDidMount() {
        this.getListData()
    }
    getListData() {
        this.props.dispatch((dispatch) => {
            dispatch({
                type: "TOPICDETAIL_UPDATE"
            })
            let id = this.props.match.params.id
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then(res => {
                    dispatch({
                        type: "TOPICDETAIL_UPDATE_SUCC",
                        data: res.data
                    })
                }).catch(err => {
                    console.log(err);
                    dispatch({
                        type: "TOPICDETAIL_UPDATE_FAIL",
                        data: err
                    })
                })
        })
    }
    render() {
        let { loading, data } = this.props
        return <div className="panel">
            <Card bordered={false} className="topic-card" loading={loading}>
                <div className="topic-header">
                    <span className="title">
                        <TextTag item={data}></TextTag>
                        {data.title}</span>
                    <div className="changes">
                        <span>发布于 {format(data.create_at, "zh_CN")}</span>
                        <span>作者 {data.author.loginname}</span>
                        <span>{data.visit_count} 次浏览</span>
                        <span>最后一次回复是 {format(data.last_reply_at, "zh_CN")}</span>
                        <span>来自 {data.tab === "share" ? "分享" : "问答"}</span>
                    </div>
                </div>
                <div className="topic-content" dangerouslySetInnerHTML={{
                    __html: data.content
                }}>
                </div>
            </Card>

            <div className="reply-container">
                <MyCard>
                    <div key="title">{data.reply_count} 回复</div>
                    <div key="content">
                        <ReplyList loading={loading} data={data}></ReplyList>
                    </div>
                </MyCard>
            </div>
        </div>
    }
}
export default connect(state => state.topicDetail)(Topic)