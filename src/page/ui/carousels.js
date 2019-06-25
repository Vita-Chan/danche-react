import React, { Component } from 'react'
import {Card,Carousel} from 'antd'
import './ui.less'
/**
 * 轮播图
 */
export default class Carousels extends Component {
    render() {
        return (
            <div>
                <Card title="文字背景轮播" className="card-warp">
                    {/* 
                    轮播图效果: 还需要在css文件中设置对应的样式
                    autoplay: 自动轮播
                    effect: 设置轮播效果 这里为渐入
                    Carousel标签下用div包括轮播的效果
                    */}
                    <Carousel autoplay effect="fade">
                        <div><h3>Ant Motion Banner - React</h3></div>
                        <div><h3>Ant Motion Banner - Vue</h3></div>
                        <div><h3>Ant Motion Banner - Angular</h3></div>
                    </Carousel>
                </Card>
                {/* 轮播图片的时候 稍微有点不一样, 需要设置样式. */}
                <Card title="图片轮播" className="slider-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}
