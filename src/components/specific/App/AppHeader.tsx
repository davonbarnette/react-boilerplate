import {SingleHeaderItem} from "../../common/Header/types";
import {BrowserRoutes} from "../../../data/Routers/BrowserRouter";
import * as Icon from "react-feather";
import React, {Component} from "react";
import Header from "../../common/Header/Header";
import {RouteComponentProps, withRouter} from "react-router";

export const MAIN_HEADER_ITEMS:SingleHeaderItem[] = [
    {path: BrowserRoutes.example, label:'Example', icon:(color:string)=><Icon.Sliders color={color} size={18}/>},
    {path: BrowserRoutes.account, label:'Account', icon:(color:string)=><Icon.User color={color} size={18}/>},
];

interface AppHeaderProps extends RouteComponentProps {

}

class AppHeader extends Component<AppHeaderProps, any> {

    render(){
        return <Header headerItems={MAIN_HEADER_ITEMS}/>
    }
}

export default withRouter(AppHeader);
