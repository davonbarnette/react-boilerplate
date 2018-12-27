import React, {Component} from 'react';
import './styles.scss';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router";
import AppStore from "../../../data/App/Store";
import {BrowserRoutes} from "../../../data/Routers/BrowserRouter";
import {Flex} from "../../common/Flex/Flex";
import ModalRouter from "../FixedComponentsRouters/ModalRouter";
import SocketDebugger from "../../common/Debugger/SocketDebugger";
import DrawerRouter from "../FixedComponentsRouters/DrawerRouter";
import AppHeader from "./AppHeader";

/* App Imports */

import ExamplePage from "../Example/ExamplePage/ExamplePage";

AppStore.initialize();

class App extends Component<RouteComponentProps, any> {

    render() {

        return (
            <Flex className='app' flexDirection='column'>
                <AppHeader />
                <Switch>
                    <Route path={BrowserRoutes.account}/>

                    /* Data Routes */
                    <Route path={BrowserRoutes.exampleByIdParam} component={ExamplePage}/>

                    <Route exact path={BrowserRoutes.debugger} component={SocketDebugger}/>
                    <Redirect to={BrowserRoutes.example}/>
                </Switch>
                <ModalRouter/>
                <DrawerRouter/>
            </Flex>
        );
    }
}

export default withRouter(App);
