import React, { Component } from 'react'
import { Col,Row } from 'antd';
import './index.less';
import utils from '../../utils/utils';
import axios from '../../axios';
/**
 * 头部内容
 */
export default class Header extends Component {
    state={}
    componentDidMount(){
        this.setState({
            userName:'Jason'
        })
        setInterval(()=>{
            let sysTime = utils.formateDate(new Date().getTime());
            this.setState({sysTime})
        },1000)
        this.getWeatherAPIData();
    }

    /**
     * 获取天气的API数据
     */
    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp(
            {url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'}
        ).then(res=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0]; // 通过返回的结果, 获取结果中想要的数据
                this.setState({
                    dayPictureUrl: data.dayPictureUrl, // 获取对应天气图片的地址
                    weather: data.weather // 获取对应天气的名称
                })
            }
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>你好, {this.state.userName}</span> 
                        <a href="#">退出</a>
                    </Col>
                </Row> 
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">首页</Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="dayPictureImg">
                            <img src={this.state.dayPictureUrl} alt="" ></img>
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
