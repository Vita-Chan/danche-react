import React from 'react'

/**
 * 获取路由中动态变量值, 必须通过match对象
 */
const page1=({match})=>{
    return (
        <div>
          <h2>This is page1 {match.params.value}</h2>
        </div>
      );
}
export default page1;