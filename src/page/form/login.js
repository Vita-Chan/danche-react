import React, { Component } from 'react'
import { Card, Form, Input, Button } from 'antd';
const FormItem = Form.Item;
/**
 * form组件 - 登录
 */
class FormLogin extends Component {
    render() {
        // antd固定的语法, 获取getFieldDecorator
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Card title="登录表单-内联初级" style={{marginBottom: 20}}>
                    {/* inline: 设置为内联布局, 默认是一行一行排列 */}
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="登录表单-水平表单, 并获取表单值 实现双向数据绑定">
                    {/* 
                    inline: 设置为内联布局, 默认是一行一行排列
                    注意: 表单获取表单值是非常麻烦的-双向数据绑定, antd 给予了方便的获取操作
                    
                    */}
                    <Form style={{width: 300}}>
                    <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue: 'Jason', 
                                    rules: []
                                })(
                                    <Input placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    initialValue: 123456, 
                                    rules: []
                                })(
                                    <Input placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin)
