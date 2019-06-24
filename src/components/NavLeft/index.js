import React, { Component } from 'react'
import './index.less'
import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig'
import {Link} from 'react-router-dom';
const { SubMenu }  = Menu;
/**
 * 菜单栏
 */
export default class NavLeft extends Component {

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode    
        })
    }

    /**
     * 遍历渲染菜单组件
     */
    renderMenu = (data) => {
        return data.map(item => {
            /**
             * 如果当前遍历的菜单包含children的话, 证明它有子菜单, 根据antd示例, 拥有子菜单的要放到<SubMenu></SubMenu>标签中 
             * 这里通过递归的方式, 如果有子菜单的话, 获取当前节点下所有的字节点进行递归遍历, 获取完之后, 继续遍历MenuConfig
             */
            if(item.children){
                return (
                <SubMenu key={item.key} title={item.title}>
                    {this.renderMenu(item.children)}
                </SubMenu>
                )
            }
            console.log("=======",item.key);
            return <Menu.Item key={item.key}><Link to={item.key}>{item.title}</Link></Menu.Item>
        })
    }

    render() {
        return (
            <div id="leftMenu">
                <div>
                    <img src="assets/logo.png" alt="" width="50" id="logo"></img>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
