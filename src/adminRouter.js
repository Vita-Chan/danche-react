import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom';
import Buttons from './page/ui/buttons';
import Admin from './admin';
import Error from './page/ui/404';
import Modals from './page/ui/modals';
export default class AdminRouter extends Component {
    render() {
        return (
            <Admin>
                <Switch>
                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                    <Route path="/admin/ui/modals" component={Modals}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </Admin>
        )
    }
}
