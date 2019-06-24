import React from 'react'
import {Link} from 'react-router-dom';
class page3 extends React.Component{
  render(){
    return (
      <div>
        <h2>This is page3</h2>
        <Link to="/page3/nest">测试嵌套路由</Link>
        <hr></hr>
        {this.props.children}
      </div>
    )
  }
}
export default page3;
