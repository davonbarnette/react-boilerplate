import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import ExampleTabs from "./ExampleTabs";
import AppStore from "../../../../data/App/Store";
import {Flex} from "../../../common/Flex/Flex";

interface ExampleContentHeaderProps {
    exampleId:string,
}

class ExampleContentHeader extends Component<ExampleContentHeaderProps, any> {

    render(){
        if (!AppStore.example) return null;
        const { exampleId } = this.props;
        if (!exampleId) return null;
        let example = AppStore.example.getById(exampleId);
        if (!example) return null;
        return(
            <Flex className='example-content-header'>
                <section className='header'>
                    <div className='header-content'>
                        <div className='left'>
                            <div className='example-name'>{example.name}</div>
                        </div>
                        <div className='right'>

                        </div>
                    </div>
                </section>
                <section className='tabs-container'>
                    <ExampleTabs className='example-header-tabs' exampleId={exampleId}/>
                </section>
            </Flex>
        )
    }
}

export default observer(ExampleContentHeader);