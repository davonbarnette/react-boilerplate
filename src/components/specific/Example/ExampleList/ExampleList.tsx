import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import ItemsList from "../../../common/ItemsList/ItemsList";
import {ItemsListItemType} from "../../../common/ItemsList/Types";
import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES, MODALS_BY_ID} from "../../../../data/App/Types";
import AppStore from "../../../../data/App/Store";
import {ExampleType} from "../../../../data/Example/Types";
import ExampleListItem from "./ExampleListItem";

interface ExampleListProps{
    exampleId?:string
    className?:string,
}

class ExampleList extends Component<ExampleListProps> {

    onAddClick = () => {
        AppActions.openFixedComponent(FIXED_COMPONENT_TYPES.MODAL, MODALS_BY_ID.EXAMPLE_MODAL)
    };

    get items(){
        let examples = AppStore.example.all;
        if (!examples) return undefined;

        return examples.map((example:ExampleType, index:number) => {
            const { uuid, name } = example;
            let selected = this.props.exampleId === uuid;
            return {
                key:uuid,
                value:name,
                component: <ExampleListItem key={uuid} exampleId={uuid} selected={selected}/>,
            } as ItemsListItemType;
        });
    }

    render(){
        return <ItemsList itemName='Example' onAddClick={this.onAddClick} items={this.items}/>
    }
}

export default observer(ExampleList);