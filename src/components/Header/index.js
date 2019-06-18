import React, { Component } from 'react'
import { Col,Row } from 'antd';
import './index.less';
import utils from '../../utils/utils';
/**
 * 头部内容
 */
export default class Header extends Component {
    state={}
    componentWillMount(){
        this.setState({
            userName:'Jason'
        })

        setInterval(()=>{
            let sysTime = utils.formateDate(new Date().getTime());
            this.setState({sysTime})
        },1000)
    }



    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>你好, {this.state.userName}</span> 
                        <a href="#">退出</a>
                    </Col>
                </Row> 
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb">首页</Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span>晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
