import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom';
import Buttons from './page/ui/buttons';
import Admin from './admin';
import Error from './page/ui/404';
import Modals from './page/ui/modals';
import Loading from './page/ui/loading';
import Notice from './page/ui/notice';
import Messages from './page/ui/messages';
import Carousels from './page/ui/carousels';
import FormLogin from './page/form/login';
export default class AdminRouter extends Component {
    render() {
        return (
            <Admin>
                <Switch>
                    <Route path="/admin/ui/buttons" component={Buttons}/>
                    <Route path="/admin/ui/modals" component={Modals}/>
                    <Route path="/admin/ui/loadings" component={Loading}/>
                    <Route path="/admin/ui/notification" component={Notice}/>
                    <Route path="/admin/ui/messages" component={Messages}/>
                    <Route path="/admin/ui/carousel" component={Carousels}/>
                    <Route path="/admin/form/login" component={FormLogin}/>
                    <Route component={Error}/>
                </Switch>
            </Admin>
        )
    }
}
