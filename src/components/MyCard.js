import React from 'react'
import '@c/mycard.css'

class MyCard extends React.Component {
    render() {
        return <div className="card-container">
            <div className="card-title">
                {this.props.children[0]}
            </div>
            <div className="card-content">
                {this.props.children[1]}
            </div>
        </div>
    }
}
export default MyCard