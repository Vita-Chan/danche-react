import React, { Component } from 'react'
import {HashRouter, Route} from 'react-router-dom';
import Login from './page/login';
import AdminRouter from './adminRouter';
class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* 这三个是最外层的路由, 做到页面全部跳转的效果 */}
        <Route path="/login" component={Login}/>>
        {/* 嵌套路由, 主要面左侧菜单栏控制路由右侧内容显示的效果. */}
        <Route path="/admin" component={AdminRouter}/>
        <Route path="/order/detail" component={Login}/>
      </HashRouter>
    );
  }
}

export default App;
