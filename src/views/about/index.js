import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import MyCard from '@c/MyCard'
import '@v/getstart/index.css'

class About extends React.Component {
    render() {
        return <div className="panel">
            <MyCard>
                <div key="title" className="title">
                    <Breadcrumb className="bread-crumb">
                        <Breadcrumb.Item className="crumb-item">
                            <Link to="/" className="active">主页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="crumb-item">关于</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div key="content" className="markdown-text">
                    <h3>关于</h3>
                    <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
                    <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                    <p>社区目前由 <a rel="nofollow noopener noreferrer" href="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</a> 在维护，有问题请联系：<a rel="nofollow noopener noreferrer" href="https://github.com/alsotang" target="_blank">https://github.com/alsotang</a></p>
                    <p>请关注我们的官方微博：<a rel="nofollow noopener noreferrer" href="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</a></p>
                    <h3>移动客户端</h3>
                    <p>客户端由 <a rel="nofollow noopener noreferrer" href="https://cnodejs.org/user/soliury" target="_blank">@soliury</a> 开发维护。</p>
                    <p>源码地址： <a rel="nofollow noopener noreferrer" href="https://github.com/soliury/noder-react-native" target="_blank">https://github.com/soliury/noder-react-native</a> 。</p>
                    <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
                    <p>另，安卓用户同时可选择：<a rel="nofollow noopener noreferrer" href="https://github.com/TakWolf/CNode-Material-Design" target="_blank">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
                    <div className="about-friend-links">
                        <h3>友情链接</h3>
                        <a rel="nofollow noopener noreferrer" href="https://www.sxl.cn" target="_blank"><img alt="sxl" src="//static.cnodejs.org/FvtwcYi5K6qoFAIsUeIgTKGeB6lQ" /></a>
                        <a rel="nofollow noopener noreferrer" href="https://www.huoban.com/" target="_blank"><img alt="huoban" src="//static.cnodejs.org/Ftmw28ed0I_rir7YYz3c_jVPkCGx" /></a>
                        <a rel="nofollow noopener noreferrer" href="http://100offer.com/" target="_blank"><img alt="100offer" src="//static.cnodejs.org/FmU1Ik57z6wrl9JDTNdcYBTDetFq" /></a>
                        <a rel="nofollow noopener noreferrer" href="https://www.teambition.com/" target="_blank"><img alt="teambition" src="//static.cnodejs.org/FkMR_SqpCp4Q0eDIaWrQlALiXdmP" /></a>
                        <a rel="nofollow noopener noreferrer" href="http://segmentfault.com/" target="_blank"><img alt="segmentfault" src="//static2.cnodejs.org/public/images/temp/sf.png" /></a>
                    </div>
                    <div>
                        <h3>LOGO</h3>
                        <p>白底： <a rel="nofollow noopener noreferrer" href="https://cnodejs.org/public/images/cnodejs.svg" target="_blank">/public/images/cnodejs.svg</a></p>
                        <p>黑底： <a rel="nofollow noopener noreferrer" href="https://cnodejs.org/public/images/cnodejs_light.svg" target="_blank">/public/images/cnodejs_light.svg</a></p>
                    </div>
                </div>
            </MyCard>
        </div>
    }
}
export default About