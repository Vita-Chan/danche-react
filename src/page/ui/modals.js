/**
 * 模态框
 */
import React, { Component } from 'react'
import { Modal, Card, Button } from 'antd';
import './ui.less';
export default class Modals extends Component {
    /** 初始化都为false */
    state={
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }

    /** type接收的参数, [type]接收的参数的值 */
    handleOpen = (type)=>{
        this.setState({
            [type]: true
        })
    }

    /** type是变量 */
    handleConfirm = (type)=>{
        /** 
         * Modal[type] 相当于 Modal.confirm
         * onOk(): 如果点击ok触发的事件
         * onCancel(): 如果点击取消触发的事件
         */ 
        Modal[type]({
            title:'确认？',
            content:'你确定你学会了React了吗？',
            onOk(){
                console.log('Ok')
            },
            onCancel(){
                console.log('Cancel')
            }
        })
    }

    render() {
        return (
            <div className="modals">
                {/* 调用函数传参的时候必须用箭头函数 */}
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() =>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() =>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() =>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() =>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>

                {/* 消息提示框, 主要用法是调用函数, 然后函数里面使用[modal.confirm]等用法 */}
                <Card  title="消息提示框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                </Card>

                {/* 
                简单的模态框
                title: 模态框的标题 
                visible: 为true时就显示, 默认时false 
                onCancel: 点击取消时的事件
                */}
                <Modal  
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={
                        ()=>{
                            this.setState({
                                showModal1: false
                            })
                        }
                    }>
                    <p>欢迎接触antd的Modal</p>
                </Modal>

                {/* 
                自定义页脚的模态框
                */}
                <Modal 
                    title="React"
                    visible={this.state.showModal2}
                    okText="确认"
                    cancelText="取消"
                    onCancel={
                        ()=>{
                            this.setState({
                                showModal2: false
                            })
                        }
                    }>
                    <p>欢迎接触antd的Modal</p>
                </Modal>

                {/* 改变antd的样式, 使模态框离顶部20px, 仅供参考 */}
                <Modal
                    title="React"
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                {/* 改变antd的样式, 使模态框居中显示 */}
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
            </div>
        )
    }
}
