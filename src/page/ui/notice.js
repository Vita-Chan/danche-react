/**
 * 通知提醒框 notification
 */
import React, { Component } from 'react'
import { notification, Card, Button } from 'antd';
import './ui.less';
export default class Notice extends Component {

    openNotification=(type)=>{
        notification[type]({
            message: "success",
            description: '消息体的内容'
        })
    }

    render() {
        return (
            <div>
                {/* 
                通过调用函数, 函数里面使用notification, 然后根据传入的参数, 弹出对应的通知框类型.
                */}
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error')}>Error</Button>
                </Card>
            </div>
        )
    }
}
