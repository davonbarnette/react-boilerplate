import React, {Component} from 'react';
import {observer} from "mobx-react";
import AppStore from "../../../data/App/Store";
import {MODALS_BY_ID} from "../../../data/App/Types";
import ExampleFormModal from "../Example/ExampleForm/ExampleFormModal";

class ModalRouter extends Component {

    render(){
        if (!AppStore.modal) return null;
        switch(AppStore.modal){
            case MODALS_BY_ID.EXAMPLE_MODAL:
                return <ExampleFormModal/>;
            default:
                return null;

        }
    }
}

export default observer(ModalRouter);

