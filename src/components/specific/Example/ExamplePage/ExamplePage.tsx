import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router";

import './styles.scss';

import AppStore from "../../../../data/App/Store";
import {Flex} from "../../../common/Flex/Flex";
import {Scrollable} from "../../../common/Scrollable/Scrollable";
import ExampleList from "../ExampleList/ExampleList";
import ExampleContentHeader from "./ExampleContentHeader";


interface ExamplePageProps extends RouteComponentProps<{exampleId:string}> {

}

class ExamplePage extends Component<ExamplePageProps, any> {

    get content(){
        const { exampleId } = this.props.match.params;
        let example = AppStore.example.getById(exampleId);
        if (!example) return null;

        return (
            <Flex className='example-content' flexDirection='column'>
                <ExampleContentHeader exampleId={exampleId}/>
                <Scrollable scrollY>
                    <Switch>
                        {/*
                            Some Router Content...
                        */}
                    </Switch>
                </Scrollable>
            </Flex>
        )
    }

    render(){
        if (!AppStore.example) return null;
        const { exampleId } = this.props.match.params;

        return(
            <section className='example-page'>
                <ExampleList exampleId={exampleId}/>
                {this.content}
            </section>
        )
    }
}

export default withRouter(observer(ExamplePage));