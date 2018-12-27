import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import ExampleForm from "./ExampleForm";
import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES} from "../../../../data/App/Types";
import Modal from "../../../common/Modal/Modal";
import {Flex} from "../../../common/Flex/Flex";

class ExampleFormModal extends Component{

    onExitModal = () => {
        AppActions.closeFixedComponent(FIXED_COMPONENT_TYPES.MODAL);
    };

    render(){
        return(
            <Modal exitModalFn={this.onExitModal} title='Add Example'>
                <Flex className='example-modal-content' flexDirection='column' justifyContent='center'>
                    <ExampleForm/>
                </Flex>
            </Modal>
        )
    }
}

export default observer(ExampleFormModal);