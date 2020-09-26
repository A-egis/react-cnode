import React from 'react'
import { NavLink } from 'react-router-dom'
import TopicList from '@c/TopicList'
import { connect } from 'react-redux'
import { Pagination } from 'antd'
import axios from 'axios'
import './index.css'

// 导航列表数据
const navList = [
    { id: 1, name: '全部', path: '/index/all' },
    { id: 2, name: '精华', path: '/index/good' },
    { id: 3, name: '分享', path: '/index/share' },
    { id: 4, name: '问答', path: '/index/ask' },
    { id: 5, name: '招聘', path: '/index/job' },
    { id: 6, name: '客户端测试', path: '/index/dev' },
]
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
    }
    componentDidMount() {
        this.getListData()
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.type !== nextProps.match.params.type) {
            this.setState({
                page: 1
            }, () => {
                this.getListData()
            })
        }
    }
    getListData() {
        let tab = this.props.match.params.type
        this.props.dispatch((dispatch) => {
            dispatch({
                type: "TOPICLIST_UPDATE"
            })
            axios.get(`https://cnodejs.org/api/v1/topics`, {
                params: {
                    tab: tab,
                    page: this.state.page,
                    limit: 40
                }
            }).then(res => {
                dispatch({
                    type: "TOPICLIST_UPDATE_SUCC",
                    data: res.data
                })
            }).catch(err => {
                console.log(err);
                dispatch({
                    type: "TOPICLIST_UPDATE_FAIL",
                    data: err
                })
            })
        })
    }
    onChange(page) {
        this.setState({
            page: page
        }, () => {
            this.getListData()
        })

    }
    render() {
        let { loading, data } = this.props
        return <div className="panel">
            <ul className="nav">
                {navList.map(item => <li key={item.id} className="nav-item">
                    <NavLink to={item.path} exact activeClassName="active-tab">{item.name}</NavLink>
                </li>)}
            </ul>
            <TopicList loading={loading} data={data}></TopicList>
            <Pagination className="pagination-container" defaultCurrent={this.state.page} current={this.state.page} pageSize={40} showSizeChanger={false} onChange={(page) => this.onChange(page)} total={1000} />
        </div>
    }
}
export default connect(state => state.topicList)(Index)
