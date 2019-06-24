import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ display: "flex" }}>
                    {/* 左侧菜单 */}
                    <div
                    style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0"
                    }}
                    >
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li>
                            <Link to="/page1">Home</Link>
                            </li>
                            <li>
                            <Link to="/page2">page2</Link>
                            </li>
                            <li>
                            <Link to="/page3">page3</Link>
                            </li>
                        </ul>  
                    </div>
                    {/* 右侧内容显示 */}
                    <div style={{ flex: 1, padding: "10px" }}>
                        {/* 
                        把该组件下面配置的所有路由标签全部显示到内容显示区，
                        这一块相当于是把所有的router路由配置放到一个map里，然后这里把map中的所有路由遍历出来放到这里里面 
                        然后点击link就会执行对应的router，去找到对应的ui组件渲染到内容去 
                        具体链接: https://reacttraining.com/react-router/web/example/basic
                        */}
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
