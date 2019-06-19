/**
 * 导出一个对象
 */
import JsonP from 'jsonp'; 
export default class Axios{
    static jsonp(option){
        return new Promise((resolve, reject)=>{
            /**
             * 回调函数里面执行JsonP,封装了JsonP的请求
             * JsonP里面有三个参数:
             * options.url- 请求的url
             * param- 请求的参数, 这里的参数是callback, "也可以理解为带callback的json就是jsonp"
             * 为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，
             * 然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。
             * function(err,response)- 是一个回调函数,是一个异步的, 请求成功的话, 更改状态为resolve并封装成功的数据, 如果失败的话, 更改状态为reject, 返回失败的数据
             */
            JsonP(
            option.url, 
            {param: 'callback'},
            (err, response)=>{
                if(response.status === 'success'){
                    resolve(response)
                }else{
                    reject(response.message)
                }
            })
        })
    }
}