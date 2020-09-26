import React from 'react'
import '@c/texttag.css'
function getClass(item) {
    return item.top || item.good ? "green-tag" : "gray-tag"
}
function getText(item, tab) {
    return item.top ? "置顶" : item.good ? "精华" : tab === "all" && item.tab === "share" ? "分享" : tab === "all" && item.tab === "ask" ? "问答" : false
}
class TextTag extends React.Component {
    render() {
        return <span>
            {getText(this.props.item, this.props.tab) &&
                <span className={getClass(this.props.item)}>{getText(this.props.item, this.props.tab)}</span>}
        </span>
    }
}
export default TextTag