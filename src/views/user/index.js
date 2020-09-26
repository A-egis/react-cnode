import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, Avatar } from 'antd'
import axios from 'axios'
import MyCard from '@c/MyCard'
import TopicList from '@c/TopicList'
import { format } from 'timeago.js'
import '@v/user/index.css'
class User extends React.Component {
    componentDidMount() {
        let loginname = this.props.match.params.id
        this.getUserInfo(loginname)
    }
    getUserInfo(loginname) {
        this.props.dispatch(function (dispatch) {
            dispatch({
                type: "USER_UPDATE"
            });
            axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
                .then(function (res) {
                    console.log(res);
                    dispatch({
                        type: "USER_SUCC",
                        data: res
                    });
                })
                .catch(function (error) {
                    dispatch({
                        type: "USER_ERROR",
                        data: error
                    });
                })
        })
    }
    render() {
        let { loading, data } = this.props
        console.log(this.props);
        return <div className="panel">
            <MyCard>
                <div key="title" className="title">
                    <Breadcrumb className="bread-crumb">
                        <Breadcrumb.Item className="crumb-item">
                            <Link to="/" className="active">主页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="crumb-item">个人主页</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div key="content" >
                    <div className="user-info">
                        <p><Avatar size={40} shape="square" src={data.data.avatar_url} alt={data.data.loginname}></Avatar>
                            <span className="user-name">{data.data.loginname}</span></p>
                        <p>{data.data.score} 积分</p>
                        <p className="create-time">注册时间{format(data.data.create_at, "zh_CN")}</p>
                    </div>

                </div>
            </MyCard>
            <MyCard>
                <div key="title" className="title">最近创建的话题</div>
                <div key="content" >
                    <TopicList loading={loading} data={data.data.recent_topics}></TopicList>
                </div>
            </MyCard>
            <MyCard>
                <div key="title" className="title">最近参与的话题</div>
                <div key="content" >
                    <TopicList loading={loading} data={data.data.recent_replies}></TopicList>
                </div>
            </MyCard>
        </div>
    }
}
export default connect(state => state.user)(User)