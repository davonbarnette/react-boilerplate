import React, {Component} from 'react';
import {observer} from "mobx-react";
import cx from 'classnames';
import * as Icon from 'react-feather';

import './styles.scss';

import BrowserRouter, {BrowserRoutes} from "../../../../data/Routers/BrowserRouter";
import AppStore from "../../../../data/App/Store";

interface ExampleListItemProps {
    exampleId:string,
    selected?:boolean,
}

class ExampleListItem extends Component<ExampleListItemProps, any> {

    onExampleListItemClick = () => {
        const { exampleId, selected } = this.props;
        if (!selected) BrowserRouter.push(BrowserRoutes.getExampleById(exampleId));
    };

    render(){
        const { exampleId, selected } = this.props;
        let example = AppStore.example.getById(exampleId);
        if (!example) return null;

        return (
            <div className={cx('example-list-item', { unselected: !selected, selected })} onClick={this.onExampleListItemClick}>
                <div className='name'>{example.name}</div>
                {selected && <Icon.ChevronRight className='arrow-right' size={18}/>}
            </div>
        )
    }
}

export default observer(ExampleListItem);