import React from 'react'
import '@c/texttag.css'
function getClass(item) {
    return item.top || item.good ? "green-tag" : "gray-tag"
}
function getText(item) {
    return item.top ? "置顶" : item.good ? "精华" : item.tab === "share" ? "分享" : item.tab === "ask" ? "问答" : item.tab
}
class TextTag extends React.Component {
    render() {
        return (
            <span className={getClass(this.props.item)}>{getText(this.props.item)}</span>
        )
    }
}
export default TextTag