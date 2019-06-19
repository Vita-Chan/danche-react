import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import page1 from './components/page1';
import page2 from './components/page2';
import page3 from './components/page3';
export default class router extends Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* exact精确匹配，不然会有重复 */}
                    <Route path="/page1/:value" component={page1}></Route>
                    <Route path="/page2" component={page2}></Route>
                    <Route path="/page3" component={page3}></Route>
                </Home>
            </Router>
        )
    }
}
