import React from 'react';
import RouterIndex from '@/router/index'
import 'antd/dist/antd.css';
import '@/index.css'
import MainHeader from '@c/MainHeader'
import MainFooter from '@c/MainFooter'
import { Layout, Row, Col } from 'antd'
function App() {
  return (
    <div className="App">
      <MainHeader />
      <Row className="main-container">
        <Col className="main-content" md={22} xs={24}>
          <Layout.Content>
            <RouterIndex />
          </Layout.Content>
        </Col>
      </Row>
      <Row className="footer-container">
        <Col md={22} xs={0}>
          <MainFooter />
        </Col>
      </Row>
    </div>
  );
}

export default App;
