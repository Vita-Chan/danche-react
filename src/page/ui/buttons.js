
import React, { Component } from 'react'
import './ui.less';
import { Card, Button,Radio } from 'antd';

/**
 * 按钮
 */
export default class Buttons extends Component {

  state=({loading: true})

  handleCloseLoading =() =>{
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <div className="buttons">
        {/* Card是一个卡片, 可以设置title, 见ui */}
        <Card  title="基础按钮" className="card-wrap">
          {/* 
          type属性, 设置按钮的样式 
          primary: 主题颜色 
          dashed: 按钮边框是虚线的
          danger: 危险的按钮, 当鼠标放上去显示红色
          disabled: 禁用按钮
          */}
          <Button type="primary">Imooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button disabled>Imooc</Button>
        </Card>

        {/* icon: 设置图形颜色 shape: 设置按钮形状*/}
        <Card title="图形按钮" className="card-wrap">
            <Button icon="plus">创建</Button>
            <Button icon="edit">编辑</Button>
            <Button icon="delete">删除</Button>
            <Button shape="circle" icon="search"></Button>
            <Button type="primary" icon="search">搜索</Button>
            <Button type="primary" icon="download">下载</Button>
        </Card>

        {/* loading: true的时候才显示加载效果 */}
        <Card title="Loading按钮" className="card-wrap">
            <Button type="primary" loading={this.state.loading}>确定</Button>
            <Button type="primary" shape="circle" loading={this.state.loading}></Button>
            <Button loading={this.state.loading} >点击加载</Button>
            <Button shape="circle" loading={this.state.loading}></Button>
            <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>

        {/* 添加事件设置按钮的大小 */}
        <Card title="按钮尺寸" className="card-wrap">
            <Radio.Group value={this.state.size} onChange={this.handleChange}>
                <Radio value="small">小</Radio>
                <Radio value="default">中</Radio>
                <Radio value="large">大</Radio>
            </Radio.Group> 
            <Button type="primary" size={this.state.size}>Imooc</Button>
            <Button size={this.state.size}>Imooc</Button>
            <Button type="dashed" size={this.state.size}>Imooc</Button>
            <Button type="danger" size={this.state.size}>Imooc</Button>
        </Card>
      </div>
    )
  }
}
