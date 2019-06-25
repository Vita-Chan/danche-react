/**
 * 加载效果 Sprin
 */
import React, { Component } from 'react'
import './ui.less';
import { Card, Spin, Icon, Alert } from 'antd';
export default class Loading extends Component {
    render() {
        // 创建一个icon的变量, 并设置大小, 供下面Spin使用
        const icon = <Icon type="loading" style={{fontSize: 24}}/>
        return (
            <div>
                <Card title="Spin简单用法" className="card-wrap">
                    {/* 
                    size: 这只效果Spin的大小
                    indicator: 设置icon
                    spinning: 是否是加载中的效果状态
                    */}
                    <Spin size="small"/>
                    <Spin style={{margin: '0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{marginLeft: 10}} spinning={true}/>
                </Card>
                <br/>
                <Card title="有内容遮盖的加载" className="card-wrap">
                    {/* 
                    Alert: 消息框
                    */}
                    <Alert
                        message="React"
                        description="欢迎学习Alert and  Spin"
                        type="info"
                        style={{marginBottom: 10}}>
                    </Alert>
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎学习Alert and  Spin"
                            type="warning"
                            style={{marginBottom: 10}}>
                        </Alert>
                    </Spin>
                    {/* 
                    tip: 设置加载效果下面提示的文字
                    */}
                    <Spin tip="加载中">
                        <Alert
                            message="React"
                            description="欢迎学习Alert and  Spin"
                            type="warning"
                            style={{marginBottom: 10}}>
                        </Alert>
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message="React"
                            description="欢迎学习Alert and  Spin"
                            type="warning"
                            style={{marginBottom: 10}}>
                        </Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}

