import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import ExampleActions from "../../../../data/Example/Actions";
import {ValidationObject} from "../../../../global/managers/Validator";
import {Flex} from "../../../common/Flex/Flex";
import Field from "../../../common/Field/Field";
import {ExampleValidation} from "../../../../data/Example/ValidationSchemas";
import Button from "../../../common/Button/Button";
import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES} from "../../../../data/App/Types";

interface ExampleFormState {
    [key:string]:string|null,
}

class ExampleForm extends Component<any, ExampleFormState> {

    state:ExampleFormState = {
        name:null,
    };

    onSubmitClick = () => {
        const { name } = this.state;
        ExampleActions.createOne(name!);
        AppActions.closeFixedComponent(FIXED_COMPONENT_TYPES.MODAL);
    };

    onInputChange = (id:string, value:string, validationObject:ValidationObject|null) => {
        if (validationObject && !validationObject.isValid) this.setState({[id]:null});
        else this.setState({[id]:value});
    };

    get disabled(){
        const { name } = this.state;
        return !name || name === '';
    }

    render(){
        return(
            <Flex className='example-form' flexDirection='column'>
                <section className='example-form-content'>
                    <Field id='name' label='Name' validation={ExampleValidation.name} className='example-form-field'
                       required onChange={this.onInputChange}/>
                </section>
                <section className='example-form-submit'>
                    <Button className='example-form-submit-button' enabled={!this.disabled} onClick={this.onSubmitClick}>SUBMIT</Button>
                </section>
            </Flex>
        )
    }
}

export default observer(ExampleForm);