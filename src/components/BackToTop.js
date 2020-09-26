import React from 'react'
class BackToTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }
    handleScroll = () => {
        if (window.pageYOffset >= 300) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }
    }
    backTop = () => {
        const scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 1);
    }
    render() {
        let { show } = this.state
        return <div>{show && <div className="scroll-container" onClick={this.backTop}>回到顶部</div>}</div>
    }
}
export default BackToTop