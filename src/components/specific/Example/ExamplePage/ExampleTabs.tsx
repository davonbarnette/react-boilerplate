import React, {Component} from 'react';
import {observer} from "mobx-react";
import * as Icon from 'react-feather';
import './styles.scss';
import {RouteComponentProps, withRouter} from "react-router";
import Tabs from "../../../common/Tabs/Tabs";
import {SingleTab} from "../../../common/Tabs/types";
import BrowserRouter, {BrowserRoutes} from "../../../../data/Routers/BrowserRouter";

interface ExampleTabsProps extends RouteComponentProps{
    exampleId:string
    className?:string,
}

class ExampleTabs extends Component<ExampleTabsProps> {
    render(){
        const { exampleId, location, className } = this.props;
        const { pathname } = location;
        return <Tabs tabs={TabsObject(exampleId, pathname)} className={className}/>
    }
}

export default withRouter(observer(ExampleTabs));

const TabsObject = (exampleId:string,pathname:string):SingleTab[] => {
    return [
        {
            label: 'Example Tab',
            icon: (color: string) => <Icon.Image color={color} size={18}/>,
            onClick: (e: MouseEvent) => {
                e.stopPropagation();
                BrowserRouter.push(BrowserRoutes.example);
            },
            selected: pathname.indexOf(BrowserRoutes.example) !== -1
        },
    ]
};