import React from 'react'
import { List, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import TextTag from '@c/TextTag'
class TopicList extends React.Component {
    render() {
        let { loading, data } = this.props
        return <div className="topic-list">
            <List loading={loading} dataSource={data}
                renderItem={item => (
                    <List.Item className="list-item">
                        {item.author.loginname ? <Link to={`/user/${item.author.loginname}`}>
                            <Avatar size={30} src={item.author.avatar_url} shape="square" alt={item.author.loginname} />
                        </Link> : <Link to={`/user/${item.loginname}`}>
                                <Avatar size={30} src={item.avatar_url} shape="square" alt={item.loginname} />
                            </Link>}
                        {item.reply_count >= 0 && item.visit_count >= 0 && <span className="reply-count">
                            <span className="count-of-replies">{`${item.reply_count}`}</span>/
                            <span className="count-of-visits">{`${item.visit_count}`}</span>
                        </span>}

                        <div className="topic-title">
                            {item.top !== undefined && <TextTag item={item} />}
                            <Link to={`/topic/${item.id}`}>{item.title}</Link>
                        </div>
                        <span className="last-reply">{format(item.last_reply_at, "zh_CN")}</span>
                    </List.Item>
                )}>

            </List>
        </div>
    }
}
export default TopicList