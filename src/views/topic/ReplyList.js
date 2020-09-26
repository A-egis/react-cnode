import React from 'react'
import { List, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
class ReplyList extends React.Component {
    render() {
        let { loading, data } = this.props
        return <div className="reply-list">
            <List loading={loading} dataSource={data.replies}
                renderItem={(item, index) => (
                    <List.Item className="list-item">
                        <div className="author-content">
                            <Link className="user-avatar" to={`/user/${item.author.loginname}`}>
                                <Avatar src={item.author.avatar_url} shape="square" alt={item.author.loginname} />
                            </Link>
                            <div className="user-info">
                                <Link className="reply-author" to={`/user/${item.author.loginname}`}>
                                    {item.author.loginname}
                                </Link>
                                <Link className="reply-time" to={`#${item.id}`}>
                                    {`${index + 1}楼●${format(item.create_at, "zh_CN")}`}
                                </Link>
                                {data.author.loginname === item.author.loginname &&
                                    <span className="reply-by-author">作者</span>}
                            </div>
                            <div className="user-action">{item.ups.length > 0 &&
                                <span><i className="thumb"></i>{item.ups.length}</span>}
                            </div>
                        </div>
                        <div className="reply-content" dangerouslySetInnerHTML={{
                            __html: item.content
                        }}>
                        </div>
                    </List.Item>
                )}>
            </List>
        </div>
    }
}
export default ReplyList