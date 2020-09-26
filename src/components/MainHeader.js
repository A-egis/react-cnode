import React from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import '@/index.css'
class MainHeader extends React.Component {
    render() {
        return <Layout.Header className="header-container">
            <Row className="header">
                <Col md={7} xs={24}><Link to="/" className="brand">
                    <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="cnodejs" />
                </Link></Col>
                <Col md={15} xs={24}>
                    <Menu mode="horizontal" theme="dark" className="nav" >
                        <Menu.Item>
                            <Link to="/">首页</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/getstart">新手入门</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Layout.Header>
    }
}
export default MainHeader
